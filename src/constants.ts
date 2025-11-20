/**
 * ProserPlan Default Constants (src/constants.ts)
 *
 * This file exports default starter data structures for initializing the application state.
 * These constants are used to provide a baseline for new users or for resetting the app.
 * The structures adhere to the interfaces defined in `src/types.ts`.
 *
 * Copyright (C) 2025 [Your Name or Organization Name] - Licensed under GPL v3.0
 */

import {
  IAccount,
  IBudgetCategory,
  IDebtItem,
  IPaycheckInfo,
} from './types';

/**
 * Default starter data for paycheck and income information.
 * Note: Monetary values are based on a single paycheck period.
 */
export const DEFAULT_PAYCHECK_INFO: IPaycheckInfo = {
  grossSalary: 3000.0,
  frequency: 'bi-weekly',
  preTaxDeductions: 150.0, // e.g., Health Insurance
  taxesAndDeductions: 700.0, // e.g., Federal, State, FICA
  retirementContribution: 250.0, // e.g., 401k
  netPay: 1900.0, // 3000 - 150 - 700 - 250
  otherIncomeSources: [
    {
      name: 'Freelance Work',
      amount: 200.0,
      frequency: 'irregular',
    },
  ],
};

/**
 * Default list of financial accounts to start with.
 * Includes a mix of assets and liabilities.
 */
export const DEFAULT_ACCOUNTS: IAccount[] = [
  {
    id: 'acc-1',
    name: 'Main Checking',
    type: 'checking',
    balance: 2500.0,
    isLiability: false,
  },
  {
    id: 'acc-2',
    name: 'Emergency Fund',
    type: 'savings',
    balance: 10000.0,
    isLiability: false,
  },
  {
    id: 'acc-3',
    name: 'Visa Rewards Card',
    type: 'credit_card',
    balance: 850.55, // Represents amount owed
    isLiability: true,
  },
  {
    id: 'acc-4',
    name: 'Brokerage Account',
    type: 'investment',
    balance: 15000.0,
    isLiability: false,
  },
];

/**
 * Default set of budget categories.
 * Includes common expense types and a sinking fund example.
 */
export const DEFAULT_BUDGET_CATEGORIES: IBudgetCategory[] = [
  {
    id: 'cat-1',
    name: 'Housing',
    budgeted: 1500.0,
    actualSpent: 0,
    isSinkingFund: false,
    rollover: 0,
  },
  {
    id: 'cat-2',
    name: 'Groceries',
    budgeted: 400.0,
    actualSpent: 0,
    isSinkingFund: false,
    rollover: 0,
  },
  {
    id: 'cat-3',
    name: 'Transportation',
    budgeted: 150.0,
    actualSpent: 0,
    isSinkingFund: false,
    rollover: 0,
  },
  {
    id: 'cat-4',
    name: 'New Car Fund',
    budgeted: 250.0,
    actualSpent: 0,
    isSinkingFund: true,
    rollover: 750.0, // Example of previous savings
  },
];

/**
 * Default list of debts for the Debt Strategy manager.
 */
export const DEFAULT_DEBTS: IDebtItem[] = [
  {
    id: 'debt-1',
    name: 'Student Loan',
    currentBalance: 22000.0,
    interestRate: 0.055, // 5.5% APR
    minimumPayment: 250.0,
    actualPayment: 250.0,
    priority: 1,
  },
  {
    id: 'debt-2',
    name: 'Car Loan',
    currentBalance: 8000.0,
    interestRate: 0.042, // 4.2% APR
    minimumPayment: 350.0,
    actualPayment: 350.0,
    priority: 2,
  },
];