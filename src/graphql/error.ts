import { GraphQLError, GraphQLFormattedError } from "graphql";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const formatGraphQLError = (
    formattedError: GraphQLFormattedError,
    error: unknown
): GraphQLFormattedError => {
    if (error instanceof GraphQLError) {
        if (error.originalError instanceof PrismaClientKnownRequestError) {
            return {
                message: "Database request error.",
                extensions: { code: "DATABASE_ERROR" },
            };
        }

        return {
            message: formattedError.message,
            extensions: formattedError.extensions,
        }
    }

    return formattedError;
}

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type */
const handleError = (resolver: Function) => {
    return async (...args: any[]) => {
        try {
            return await resolver(...args);
        }

        catch (error) {
            console.error("Resolver error:", error);

            throw new GraphQLError("Internal server error", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    };
}

const wrapResolvers = (resolvers: any): any => {
    const wrappedResolvers: any = {};

    for (const type in resolvers) {
        wrappedResolvers[type] = {};

        for (const field in resolvers[type]) {
            const resolver = resolvers[type][field];

            if (typeof resolver === "function") wrappedResolvers[type][field] = handleError(resolver);
            else wrappedResolvers[type][field] = resolver;

        }
    }

    return wrappedResolvers;
}
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type */

export { formatGraphQLError, wrapResolvers }