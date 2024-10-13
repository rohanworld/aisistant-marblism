/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAiAgentRouter from "./AiAgent.router";
import createTagRouter from "./Tag.router";
import createAiAgentTagRouter from "./AiAgentTag.router";
import createPricingOptionRouter from "./PricingOption.router";
import createHireRouter from "./Hire.router";
import createReviewRouter from "./Review.router";
import createAiAgentImageRouter from "./AiAgentImage.router";
import createMessageRouter from "./Message.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as AiAgentClientType } from "./AiAgent.router";
import { ClientType as TagClientType } from "./Tag.router";
import { ClientType as AiAgentTagClientType } from "./AiAgentTag.router";
import { ClientType as PricingOptionClientType } from "./PricingOption.router";
import { ClientType as HireClientType } from "./Hire.router";
import { ClientType as ReviewClientType } from "./Review.router";
import { ClientType as AiAgentImageClientType } from "./AiAgentImage.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        aiAgent: createAiAgentRouter(router, procedure),
        tag: createTagRouter(router, procedure),
        aiAgentTag: createAiAgentTagRouter(router, procedure),
        pricingOption: createPricingOptionRouter(router, procedure),
        hire: createHireRouter(router, procedure),
        review: createReviewRouter(router, procedure),
        aiAgentImage: createAiAgentImageRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    aiAgent: AiAgentClientType<AppRouter>;
    tag: TagClientType<AppRouter>;
    aiAgentTag: AiAgentTagClientType<AppRouter>;
    pricingOption: PricingOptionClientType<AppRouter>;
    hire: HireClientType<AppRouter>;
    review: ReviewClientType<AppRouter>;
    aiAgentImage: AiAgentImageClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
