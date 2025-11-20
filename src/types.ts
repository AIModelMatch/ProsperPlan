/**
 * ProserPlan TypeScript Interfaces (src/types.ts)
 * * Defines the core data structures for all financial pillars of the application.
 * All application components will rely on these types for strong type checking and data consistency.
 * * Copyright (C) 2025 [Your Name or Organization Name] - Licensed under GPL v3.0
 */

// --- 1. CORE CONFIGURATION AND STATE TYPES ---

/**
 * Defines the overall structure for the entire application state and configuration.
 */
export interface IAppConfig {
    userId: string;
    // The current active month being viewed/edited (e.g., "2025-01")
    activeMonth: string; 
    // Data structure for the current monthly budget and category definitions
    budget: IBudgetCategory[];
    // Detailed paycheck analysis data
    paycheckInfo: IPaycheckInfo;
    // List of all outstanding debts for the Debt Strategy manager
    debts: IDebtItem[];
    // List of tracked financial accounts (checking, savings, investment, credit)
    accounts: IAccount[];
}

/**
 * Defines a single tracked financial account.
 */
export interface IAccount {
    id: string;
    name: string;
    // Type of account: checking, savings, investment, credit_card, loan
    type: 'checking' | 'savings' | 'investment' | 'credit_card' | 'loan';
    // Current balance of the account
    balance: number; 
    // For calculating Net Worth (Assets are positive, Liabilities are negative)
    isLiability: boolean; 
}


// --- 2. INCOME AND PAYCHECK TYPES ---

/**
 * Detailed structure for analyzing the primary source of income (Paycheck).
 */
export interface IPaycheckInfo {
    grossSalary: number;
    // Frequency of paychecks (e.g., 'monthly', 'bi-weekly', 'weekly')
    frequency: 'monthly' | 'bi-weekly' | 'weekly'; 
    // Pre-tax deductions (e.g., health insurance, dental)
    preTaxDeductions: number;
    // Mandatory and voluntary deductions (e.g., Federal, State, Social Security)
    taxesAndDeductions: number; 
    // 401k/Retirement contributions
    retirementContribution: number;
    // Net pay after all deductions
    netPay: number; 
    // Other sources of predictable income (e.g., rental income, side job)
    otherIncomeSources: IOtherIncome[];
}

/**
 * Structure for tracking secondary or irregular income sources.
 */
export interface IOtherIncome {
    name: string;
    amount: number;
    frequency: 'monthly' | 'quarterly' | 'yearly' | 'irregular';
}


// --- 3. BUDGETING AND TRANSACTION TYPES ---

/**
 * Defines a single budget category and its monthly performance.
 */
export interface IBudgetCategory {
    id: string;
    name: string;
    // Monthly amount planned to spend
    budgeted: number; 
    // Actual amount spent in this category this month
    actualSpent: number;
    // Indicates if the category is a 'sinking fund' or regular expense
    isSinkingFund: boolean; 
    // The remaining/rolled over balance from the previous month
    rollover: number; 
}

/**
 * Structure for a single financial transaction.
 */
export interface ITransaction {
    id: string;
    date: string; // ISO Date string (e.g., "2025-01-20")
    description: string;
    amount: number;
    category: string; // Must match a name in IBudgetCategory
    // Owner for shared finances analysis
    owner?: 'Self' | 'Partner' | 'Shared'; 
}


// --- 4. DEBT STRATEGY TYPES ---

/**
 * Defines a single debt item for the Debt Strategy manager.
 */
export interface IDebtItem {
    id: string;
    name: string;
    currentBalance: number;
    interestRate: number; // Annual Percentage Rate (e.g., 0.05 for 5%)
    minimumPayment: number;
    // Actual amount paid toward the debt this month
    actualPayment: number; 
    // Payoff method priority (lower number = higher priority for Snowball/Avalanche)
    priority: number; 
}

/**
 * Defines the result of a Snowball or Avalanche scenario calculation.
 */
export interface IPayoffScenario {
    method: 'Snowball' | 'Avalanche';
    totalInterestPaid: number;
    monthsToPayoff: number;
    // Array tracking the balance over time for visualization
    projectedBalances: { month: string; balance: number }[]; 
}