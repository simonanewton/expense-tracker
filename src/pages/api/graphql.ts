import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { gql } from "graphql-tag";

interface MyContext {
    token: string;
}

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: (_parent: unknown, _args: unknown, { token }: MyContext) => {
            return `Hello from Apollo Server 4! Your token is: ${token}`;
        },
    },
};

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
});

export default startServerAndCreateNextHandler(server, {
    context: async (
        req: NextApiRequest,
        _res?: NextApiResponse
    ): Promise<MyContext> => {
        const token = req.headers.authorization || "";
        return { token };
    },
});