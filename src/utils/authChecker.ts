import { User } from '../entities/User';
import { Context, MyContext } from './../../types.d';
import { AuthChecker } from 'types';

export const authChecker: AuthChecker<Context> = async (
  { context: { em, req } }: { context: MyContext },
  roles: string[],
) => {
  const user = await em.findOne(User, {
    where: {
      userId: req.session.userId,
    },
  });
  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return user !== undefined;
  }
  // there are some roles defined now

  if (!user) {
    // and if no user, restrict access
    return false;
  }
  if (user.roles.some((role) => roles.includes(role))) {
    // grant access if the roles overlap
    return true;
  }

  // no roles matched, restrict access
  return false;
};
