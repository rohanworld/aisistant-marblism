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

        createMany: procedure.input($Schema.AiAgentTagInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentTag.createMany(input as any))),

        create: procedure.input($Schema.AiAgentTagInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentTag.create(input as any))),

        deleteMany: procedure.input($Schema.AiAgentTagInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentTag.deleteMany(input as any))),

        delete: procedure.input($Schema.AiAgentTagInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentTag.delete(input as any))),

        findFirst: procedure.input($Schema.AiAgentTagInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).aiAgentTag.findFirst(input as any))),

        findMany: procedure.input($Schema.AiAgentTagInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).aiAgentTag.findMany(input as any))),

        findUnique: procedure.input($Schema.AiAgentTagInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).aiAgentTag.findUnique(input as any))),

        updateMany: procedure.input($Schema.AiAgentTagInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentTag.updateMany(input as any))),

        update: procedure.input($Schema.AiAgentTagInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentTag.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AiAgentTagCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentTagCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentTagCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentTagCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AiAgentTagCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentTagCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentTagCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentTagCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentTagGetPayload<T>, Context>) => Promise<Prisma.AiAgentTagGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AiAgentTagDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentTagDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentTagDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentTagDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AiAgentTagDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentTagDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentTagDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentTagDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentTagGetPayload<T>, Context>) => Promise<Prisma.AiAgentTagGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AiAgentTagFindFirstArgs, TData = Prisma.AiAgentTagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentTagFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiAgentTagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentTagFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentTagFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiAgentTagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiAgentTagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AiAgentTagFindManyArgs, TData = Array<Prisma.AiAgentTagGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentTagFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AiAgentTagGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentTagFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentTagFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AiAgentTagGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AiAgentTagGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AiAgentTagFindUniqueArgs, TData = Prisma.AiAgentTagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentTagFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiAgentTagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentTagFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentTagFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiAgentTagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiAgentTagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AiAgentTagUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentTagUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentTagUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentTagUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AiAgentTagUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentTagUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentTagUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentTagUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentTagGetPayload<T>, Context>) => Promise<Prisma.AiAgentTagGetPayload<T>>
            };

    };
}
