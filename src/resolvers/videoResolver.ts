import { DeleteResult } from 'typeorm';
import { MyContext } from '../../types';
import { Video } from '../entities/Video';
import {
  Arg,
  Authorized,
  Field,
  InputType,
  Int,
  Mutation,
  Resolver,
} from 'type-graphql';
import { Ctx, Query } from 'type-graphql';
import seedData from '../seedData';

@InputType()
class VideoInput {
  @Field()
  title: string;

  @Field()
  views: number;

  @Field()
  likes: number;

  @Field()
  dislikes: number;

  @Field()
  channel: string;

  @Field()
  thumbnail_url: string;

  @Field()
  category: string;
}

@Resolver()
export class VideoResolver {
  @Query(() => [Video], { nullable: true })
  async videos(@Ctx() { em }: MyContext): Promise<Video[]> {
    return await em.find(Video, {});
  }

  @Query(() => Video, { nullable: true })
  async video(
    @Arg('videoId', () => String) videoId: string,
    @Ctx() { em }: MyContext,
  ): Promise<Video | undefined> {
    return await em.findOne(Video, { videoId });
  }

  @Authorized('REGULAR')
  @Mutation(() => Video, { nullable: true })
  addVideo(@Arg('inputData') inputData: VideoInput): Promise<Video> {
    return Video.create({
      ...inputData,
      playlists: [],
    }).save();
  }

  @Authorized('REGULAR')
  @Mutation(() => Video, { nullable: true })
  async removeVideo(
    @Arg('videoId') videoId: string,
    @Ctx() { em }: MyContext,
  ): Promise<DeleteResult> {
    return await em.delete(Video, videoId);
  }

  @Authorized('REGULAR')
  @Mutation(() => [Video], { nullable: true })
  async seedVideos(@Ctx() { em }: MyContext): Promise<Video[]> {
    seedData(em)
      .then((_) => console.log('Successfully Seeded'))
      .catch((err) => console.log(err));
    return await em.find(Video, {});
  }
}
