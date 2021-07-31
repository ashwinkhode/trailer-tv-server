import { GraphQLResolveInfo } from 'graphql';
import { ClassType } from './ClassType';
import { ResolverData } from './ResolverData';
import { Request, Response } from 'express';
import { EntityManager } from 'typeorm';
import { User } from 'src/entities/User';

export type MyContext = {
  em: EntityManager;
  req: Request & { session: Express.Request.session };
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

export type AuthChecker<TContextType = {}, TRoleType = string> =
  | AuthCheckerFn<TContextType, TRoleType>
  | ClassType<AuthCheckerInterface<TContextType, TRoleType>>;

export type AuthMode = 'error' | 'null';

export interface Context {
  user?: User;
}
