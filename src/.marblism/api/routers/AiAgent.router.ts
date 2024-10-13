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

        createMany: procedure.input($Schema.AiAgentInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgent.createMany(input as any))),

        create: procedure.input($Schema.AiAgentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgent.create(input as any))),

        deleteMany: procedure.input($Schema.AiAgentInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgent.deleteMany(input as any))),

        delete: procedure.input($Schema.AiAgentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgent.delete(input as any))),

        findFirst: procedure.input($Schema.AiAgentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).aiAgent.findFirst(input as any))),

        findMany: procedure.input($Schema.AiAgentInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).aiAgent.findMany(input as any))),

        findUnique: procedure.input($Schema.AiAgentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).aiAgent.findUnique(input as any))),

        updateMany: procedure.input($Schema.AiAgentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgent.updateMany(input as any))),

        update: procedure.input($Schema.AiAgentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgent.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AiAgentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AiAgentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentGetPayload<T>, Context>) => Promise<Prisma.AiAgentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AiAgentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AiAgentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentGetPayload<T>, Context>) => Promise<Prisma.AiAgentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AiAgentFindFirstArgs, TData = Prisma.AiAgentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiAgentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiAgentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiAgentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AiAgentFindManyArgs, TData = Array<Prisma.AiAgentGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AiAgentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AiAgentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AiAgentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AiAgentFindUniqueArgs, TData = Prisma.AiAgentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiAgentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiAgentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiAgentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AiAgentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AiAgentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentGetPayload<T>, Context>) => Promise<Prisma.AiAgentGetPayload<T>>
            };

    };
}
