import { createTRPCRouter, protectedProcedure } from '../trpc';

export const moneySourcesRouter = createTRPCRouter({
  getAll: protectedProcedure
    .query(async ({ctx}) => {
      return await ctx.db.query.moneySources.findMany({
        where: (moneySources, {eq}) => eq(moneySources.userId, ctx.session.user.id)
      })
    })
})