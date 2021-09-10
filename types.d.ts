import { GraphQLResolveInfo } from 'graphql';
import { Request, Response } from 'express';
import { EntityManager } from 'typeorm';
import { User } from 'src/entities/User';
import { Session } from 'express-session';

export type SessionType = {
  userId?: string;
};

export type MyContext = {
  em: EntityManager;
  req: Request & { session: SessionType };
  res: Response;
};

export interface ArgsDictionary {
  [argName: string]: any;
}

export interface ResolverData<ContextType = {}> {
  root: any;
  args: ArgsDictionary;
  context: ContextType;
  info: GraphQLResolveInfo;
}

export interface ClassType<T = any> {
  new (...args: any[]): T;
}

export type AuthCheckerFn<TContextType = {}, TRoleType = string> = (
  resolverData: ResolverData<TContextType>,
  roles: TRoleType[],
) => boolean | Promise<boolean>;

export type AuthCheckerInterface<TContextType = {}, TRoleType = string> = {
  check(
    resolverData: ResolverData<TContextType>,
    roles: TRoleType[],
  ): boolean | Promise<boolean>;
};

export type AuthMode = 'error' | 'null';

export interface AuthContext {
  user?: User;
}
