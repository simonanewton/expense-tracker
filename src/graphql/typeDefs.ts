import { gql } from "graphql-tag";

const typeDefs = gql`
    type Expense {
        id: ID!
        date: String!
        category: String!
        amount: Float!
        description: String
    }

    type Income {
        id: ID!
        date: String!
        source: String!
        amount: Float!
        description: String
    }

    type Budget {
        id: ID!
        category: String!
        limit: Int!
        period: String!
    }

    type Query {
        getExpenses: [Expense]!
        getExpenseById(id: ID!): Expense

        getIncomes: [Income]!
        getIncomeById(id: ID!): Income

        getBudgets: [Budget]!
        getBudgetById(id: ID!): Budget
    }

    type Mutation {
        addExpense(date: String!, category: String!, amount: Float!, description: String): Expense!
        deleteExpense(id: ID!): Expense!

        addIncome(date: String!, source: String!, amount: Float!, description: String): Income!
        deleteIncome(id: ID!): Expense!

        addBudget(category: String!, limit: Int!, period: String!): Budget!
        deleteBudget(id: ID!): Expense!
    }
`;

export default typeDefs;

// hi i love you <3 xoxo