import { PrismaClient } from "@prisma/client";
import { wrapResolvers } from "@/graphql/error";

const prisma = new PrismaClient();

const resolvers = wrapResolvers({
    Query: {
        getExpenses: async () => await prisma.expense.findMany(),

        getExpenseById: async (_parent: unknown, { id }: { id: string }) =>
            await prisma.expense.findUnique({ where: { id } }),

        getIncomes: async () => await prisma.income.findMany(),

        getIncomeById: async (_parent: unknown, { id }: { id: string }) =>
            await prisma.income.findUnique({ where: { id } }),

        getBudgets: async () => await prisma.budget.findMany(),

        getBudgetById: async (_parent: unknown, { id }: { id: string }) =>
            await prisma.budget.findUnique({ where: { id } })
    },

    Mutation: {
        addExpense: async (_parent: unknown,
            { date, category, amount, description }: { date: string, category: string, amount: number, description?: string }) =>
            await prisma.expense.create({ data: { date, category, amount, description } }),

        deleteExpense: async (_parent: unknown, { id }: { id: string }) => await prisma.expense.delete({ where: { id: id } }),

        addIncome: async (_parent: unknown,
            { date, source, amount, description }: { date: string, source: string, amount: number, description?: string }) =>
            await prisma.income.create({ data: { date, source, amount, description } }),

        deleteIncome: async (_parent: unknown, { id }: { id: string }) => await prisma.income.delete({ where: { id: id } }),

        addBudget: async (_parent: unknown,
            { category, limit, period }: { category: string, limit: number, period: string }) =>
            await prisma.budget.create({ data: { category, limit, period } }),

        deleteBudget: async (_parent: unknown, { id }: { id: string }) => await prisma.budget.delete({ where: { id: id } })
    }
});

export default resolvers;