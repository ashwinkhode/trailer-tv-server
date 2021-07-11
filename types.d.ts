import { Request, Response } from 'express';
import { EntityManager } from 'typeorm';

export type MyContext = {
  em: EntityManager;
  req: Request & { session: Express.Request.session };
  res: Response;
};
