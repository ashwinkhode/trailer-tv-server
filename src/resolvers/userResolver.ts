import { MyContext } from './../../types.d';
import argon2 from 'argon2';
import { User } from './../entities/User';
import {
  Arg,
  Mutation,
  InputType,
  Field,
  Ctx,
  Query,
  ObjectType,
} from 'type-graphql';

@InputType()
class UserInputType {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { em, req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }

    return await em.findOne(User, { userId: req.session.userId });
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('userInput') userInput: UserInputType,
    @Ctx() { req }: MyContext,
  ): Promise<UserResponse> {
    const user = await User.findOne({ email: userInput.email });
    if (!user) {
      return {
        errors: [
          {
            field: 'email',
            message: 'that email does not exists',
          },
        ],
      };
    }
    const isValid = argon2.verify(user.password, userInput.password);
    if (!isValid) {
      return {
        errors: [
          {
            field: 'password',
            message: 'incorrect password',
          },
        ],
      };
    }

    req.session.userId = user.userId;

    return { user };
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('userInput') userInput: UserInputType,
    @Ctx() { em, req }: MyContext,
  ): Promise<UserResponse> {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = re.test(String(userInput.email).toLowerCase());
    if (!isValidEmail) {
      return {
        errors: [
          {
            field: 'email',
            message: 'Please enter a valid email address',
          },
        ],
      };
    }
    if (userInput.password.length <= 3) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Password must be of length greater than 3',
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(userInput.password);
    let user;
    try {
      user = await em
        .create(User, {
          email: userInput.email,
          password: hashedPassword,
          playlists: null,
        } as any)
        .save();
    } catch (err) {
      if (err.code === '23505') {
        return {
          errors: [
            {
              field: 'email',
              message: 'User already exists',
            },
          ],
        };
      }
      return {
        errors: [
          {
            field: 'password',
            message: err.detail,
          },
        ],
      };
    }

    req.session.userId = user.userId;

    return { user };
  }
}
