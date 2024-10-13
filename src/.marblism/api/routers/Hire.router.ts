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

        createMany: procedure.input($Schema.HireInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hire.createMany(input as any))),

        create: procedure.input($Schema.HireInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hire.create(input as any))),

        deleteMany: procedure.input($Schema.HireInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hire.deleteMany(input as any))),

        delete: procedure.input($Schema.HireInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hire.delete(input as any))),

        findFirst: procedure.input($Schema.HireInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).hire.findFirst(input as any))),

        findMany: procedure.input($Schema.HireInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).hire.findMany(input as any))),

        findUnique: procedure.input($Schema.HireInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).hire.findUnique(input as any))),

        updateMany: procedure.input($Schema.HireInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hire.updateMany(input as any))),

        update: procedure.input($Schema.HireInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hire.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.HireCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HireCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HireCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HireCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.HireCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HireCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HireGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HireGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HireCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HireCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HireGetPayload<T>, Context>) => Promise<Prisma.HireGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.HireDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HireDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HireDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HireDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.HireDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HireDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HireGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HireGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HireDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HireDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HireGetPayload<T>, Context>) => Promise<Prisma.HireGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.HireFindFirstArgs, TData = Prisma.HireGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HireFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HireGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HireFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HireFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HireGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HireGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.HireFindManyArgs, TData = Array<Prisma.HireGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.HireFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.HireGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HireFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HireFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.HireGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.HireGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.HireFindUniqueArgs, TData = Prisma.HireGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HireFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HireGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HireFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HireFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HireGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HireGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.HireUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HireUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HireUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HireUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.HireUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HireUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HireGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HireGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HireUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HireUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HireGetPayload<T>, Context>) => Promise<Prisma.HireGetPayload<T>>
            };

    };
}
