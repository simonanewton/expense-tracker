import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { NextApiRequest, NextApiResponse } from "next";
import typeDefs from "@/graphql/typeDefs";
import resolvers from "@/graphql/resolvers";
import { formatGraphQLError } from "@/graphql/error";

interface Context {
    token: string;
}

const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    formatError: formatGraphQLError
});

export default startServerAndCreateNextHandler(server, {
    context: async (req: NextApiRequest, _res?: NextApiResponse): Promise<Context> => {
        const token = req.headers.authorization || "";
        return { token };
    }
});