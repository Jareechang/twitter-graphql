export interface IResolverSimple<
  TArg = unknown,
  TContext = unknown,
  Return = any
  >  {
    /*
     * Resolver function
     *
     * **/
    (
      parent: unknown,
      arg: TArg,
      ctx: TContext,
      info: unknown
    ): Return
  }

export type Maybe<T> = T | null;
