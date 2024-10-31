import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { moneySourcesRouter } from './routers/moneySources';

export const appRouter = createTRPCRouter({
  moneySources: moneySourcesRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
