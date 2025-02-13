import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ExpenseData = {
    date: string,
    category: string,
    amount: number,
    description: string
}[];

const fakeData = (): ExpenseData => {
    const numEntries: number = 25;
    const expenses: ExpenseData = [];

    const expenseCategories: { weight: number, value: string }[] = [
        {
            weight: 1,
            value: "Rent"
        },
        {
            weight: 1,
            value: "Utilities"
        },
        {
            weight: 3,
            value: "Groceries"
        },
        {
            weight: 3,
            value: "Entertainment"
        },
        {
            weight: 2,
            value: "Automotive"
        },
        {
            weight: 3,
            value: "Shopping"
        },
        {
            weight: 3,
            value: "Subscriptions"
        },
        {
            weight: 2,
            value: "Health & Wellness"
        },
        {
            weight: 2,
            value: "Other"
        }
    ];

    for (let i: number = 0; i < numEntries; i++) {
        expenses.push({
            date: (faker.date.past()).toString(),
            category: faker.helpers.weightedArrayElement(expenseCategories),
            amount: parseFloat(faker.finance.amount({ dec: 2, max: 100 })),
            description: faker.lorem.sentence({ min: 3, max: 5 })
        });
    }

    return expenses;
}

const main = async (): Promise<void> => {
    await prisma.expense.deleteMany();

    await prisma.expense.createMany({
        data: fakeData()
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });