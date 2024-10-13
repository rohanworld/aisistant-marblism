/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PricingOptionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pricingOption.createMany(input as any))),

        create: procedure.input($Schema.PricingOptionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pricingOption.create(input as any))),

        deleteMany: procedure.input($Schema.PricingOptionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pricingOption.deleteMany(input as any))),

        delete: procedure.input($Schema.PricingOptionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pricingOption.delete(input as any))),

        findFirst: procedure.input($Schema.PricingOptionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).pricingOption.findFirst(input as any))),

        findMany: procedure.input($Schema.PricingOptionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).pricingOption.findMany(input as any))),

        findUnique: procedure.input($Schema.PricingOptionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).pricingOption.findUnique(input as any))),

        updateMany: procedure.input($Schema.PricingOptionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pricingOption.updateMany(input as any))),

        update: procedure.input($Schema.PricingOptionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pricingOption.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PricingOptionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PricingOptionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PricingOptionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PricingOptionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PricingOptionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PricingOptionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PricingOptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PricingOptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PricingOptionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PricingOptionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PricingOptionGetPayload<T>, Context>) => Promise<Prisma.PricingOptionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PricingOptionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PricingOptionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PricingOptionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PricingOptionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PricingOptionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PricingOptionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PricingOptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PricingOptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PricingOptionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PricingOptionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PricingOptionGetPayload<T>, Context>) => Promise<Prisma.PricingOptionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PricingOptionFindFirstArgs, TData = Prisma.PricingOptionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PricingOptionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PricingOptionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PricingOptionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PricingOptionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PricingOptionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PricingOptionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PricingOptionFindManyArgs, TData = Array<Prisma.PricingOptionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PricingOptionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PricingOptionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PricingOptionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PricingOptionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PricingOptionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PricingOptionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PricingOptionFindUniqueArgs, TData = Prisma.PricingOptionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PricingOptionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PricingOptionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PricingOptionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PricingOptionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PricingOptionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PricingOptionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PricingOptionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PricingOptionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PricingOptionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PricingOptionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PricingOptionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PricingOptionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PricingOptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PricingOptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PricingOptionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PricingOptionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PricingOptionGetPayload<T>, Context>) => Promise<Prisma.PricingOptionGetPayload<T>>
            };

    };
}
