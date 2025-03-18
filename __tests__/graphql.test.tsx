/**
 * @jest-environment node
*/

import { ApolloServer } from "@apollo/server";
import typeDefs from "@/graphql/typeDefs";
import resolvers from "@/graphql/resolvers";
import { formatGraphQLError } from "@/graphql/error";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("GraphQL API", () => {
    let server: ApolloServer;

    beforeAll(() => {
        server = new ApolloServer({
            typeDefs,
            resolvers,
            formatError: formatGraphQLError,
        });
    });

    it("fetches all expenses", async () => {
        const GET_EXPENSES = `
            query {
                getExpenses {
                    id
                    date
                    category
                    amount
                    description
                }
            }
        `;

        const response = await server.executeOperation(
            { query: GET_EXPENSES },
            { contextValue: { prisma } }
        );

        if (response.body.kind === "single") {
            const { errors, data } = response.body.singleResult as {
                errors?: unknown;
                data?: { getExpenses: Array<{ id: string; date: string; category: string; amount: number; description?: string }> };
            };

            expect(errors).toBeUndefined();
            expect(data?.getExpenses).toBeInstanceOf(Array);
        } else {
            throw new Error("Unexpected response type");
        }
    });

    it("adds a new expense", async () => {
        const ADD_EXPENSE = `
            mutation AddExpense($date: String!, $category: String!, $amount: Float!, $description: String) {
                addExpense(date: $date, category: $category, amount: $amount, description: $description) {
                    id
                    date
                    category
                    amount
                    description
                }
            }
        `;

        const variables = {
            date: "2025-03-17",
            category: "Groceries",
            amount: 50.0,
            description: "Weekly groceries",
        };

        const response = await server.executeOperation(
            { query: ADD_EXPENSE, variables },
            { contextValue: { prisma } }
        );

        if (response.body.kind === "single") {
            const { errors, data } = response.body.singleResult as {
                errors?: unknown;
                data?: { addExpense: { id: string; date: string; category: string; amount: number; description?: string } };
            };

            expect(errors).toBeUndefined();
            expect(data?.addExpense).toMatchObject(variables);
        } else {
            throw new Error("Unexpected response type");
        }
    });

    it("deletes an expense", async () => {
        const DELETE_EXPENSE = `
            mutation DeleteExpense($id: ID!) {
                deleteExpense(id: $id) {
                    id
                }
            }
        `;

        const createResponse = await server.executeOperation(
            {
                query: `
                    mutation AddExpense($date: String!, $category: String!, $amount: Float!, $description: String) {
                        addExpense(date: $date, category: $category, amount: $amount, description: $description) {
                            id
                        }
                    }
                `,
                variables: {
                    date: "2025-03-17",
                    category: "Entertainment",
                    amount: 20.0,
                    description: "Movie ticket",
                },
            },
            { contextValue: { prisma } }
        );

        const createdExpenseId = (createResponse.body.kind === "single" &&
            (createResponse.body.singleResult as { data?: { addExpense: { id: string } } }).data?.addExpense.id) || null;

        expect(createdExpenseId).toBeDefined();

        const deleteResponse = await server.executeOperation(
            { query: DELETE_EXPENSE, variables: { id: createdExpenseId } },
            { contextValue: { prisma } }
        );

        if (deleteResponse.body.kind === "single") {
            const { errors, data } = deleteResponse.body.singleResult as {
                errors?: unknown;
                data?: { deleteExpense: { id: string } };
            };

            expect(errors).toBeUndefined();
            expect(data?.deleteExpense.id).toBe(createdExpenseId);
        }
    });
});