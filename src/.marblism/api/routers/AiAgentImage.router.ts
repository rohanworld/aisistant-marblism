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

        createMany: procedure.input($Schema.AiAgentImageInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentImage.createMany(input as any))),

        create: procedure.input($Schema.AiAgentImageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentImage.create(input as any))),

        deleteMany: procedure.input($Schema.AiAgentImageInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentImage.deleteMany(input as any))),

        delete: procedure.input($Schema.AiAgentImageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentImage.delete(input as any))),

        findFirst: procedure.input($Schema.AiAgentImageInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).aiAgentImage.findFirst(input as any))),

        findMany: procedure.input($Schema.AiAgentImageInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).aiAgentImage.findMany(input as any))),

        findUnique: procedure.input($Schema.AiAgentImageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).aiAgentImage.findUnique(input as any))),

        updateMany: procedure.input($Schema.AiAgentImageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentImage.updateMany(input as any))),

        update: procedure.input($Schema.AiAgentImageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiAgentImage.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AiAgentImageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentImageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentImageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentImageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AiAgentImageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentImageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentImageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentImageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentImageGetPayload<T>, Context>) => Promise<Prisma.AiAgentImageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AiAgentImageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentImageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentImageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentImageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AiAgentImageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentImageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentImageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentImageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentImageGetPayload<T>, Context>) => Promise<Prisma.AiAgentImageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AiAgentImageFindFirstArgs, TData = Prisma.AiAgentImageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentImageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiAgentImageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentImageFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentImageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiAgentImageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiAgentImageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AiAgentImageFindManyArgs, TData = Array<Prisma.AiAgentImageGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentImageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AiAgentImageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentImageFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentImageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AiAgentImageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AiAgentImageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AiAgentImageFindUniqueArgs, TData = Prisma.AiAgentImageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiAgentImageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiAgentImageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiAgentImageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiAgentImageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiAgentImageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiAgentImageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AiAgentImageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentImageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentImageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentImageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AiAgentImageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiAgentImageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiAgentImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiAgentImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiAgentImageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiAgentImageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiAgentImageGetPayload<T>, Context>) => Promise<Prisma.AiAgentImageGetPayload<T>>
            };

    };
}
