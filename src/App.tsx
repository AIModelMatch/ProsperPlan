/**
 * ProserPlan Main Application Component (src/App.tsx)
 *
 * This is the root component of the ProserPlan application. It initializes the main
 * application state, orchestrates the primary layout, and renders core financial
 * data like the user's Net Worth.
 *
 * Copyright (C) 2025 [Your Name or Organization Name] - Licensed under GPL v3.0
 */

import React, { useState, useEffect } from 'react';
import { IAppConfig, IAccount } from './types';
import {
  DEFAULT_ACCOUNTS,
  DEFAULT_BUDGET_CATEGORIES,
  DEFAULT_DEBTS,
  DEFAULT_PAYCHECK_INFO,
} from './constants';

/**
 * Calculates the total net worth from a list of financial accounts.
 * Assets (isLiability: false) are added, and liabilities are subtracted.
 * @param accounts - An array of IAccount objects.
 * @returns The calculated total net worth as a number.
 */
const calculateNetWorth = (accounts: IAccount[]): number => {
  return accounts.reduce((total, account) => {
    // If it's a liability, subtract its balance; otherwise, add it.
    const value = account.isLiability ? -account.balance : account.balance;
    return total + value;
  }, 0);
};

const App: React.FC = () => {
  // Initialize the main application state using the IAppConfig interface and default constants.
  const [appConfig, setAppConfig] = useState<IAppConfig>({
    userId: 'user-default-01', // Placeholder user ID
    activeMonth: new Date().toISOString().slice(0, 7), // e.g., "2025-01"
    accounts: DEFAULT_ACCOUNTS,
    budget: DEFAULT_BUDGET_CATEGORIES,
    debts: DEFAULT_DEBTS,
    paycheckInfo: DEFAULT_PAYCHECK_INFO,
  });

  // State to hold the calculated net worth.
  const [netWorth, setNetWorth] = useState<number>(0);

  // Use useEffect to recalculate net worth whenever the accounts in the state change.
  useEffect(() => {
    const newNetWorth = calculateNetWorth(appConfig.accounts);
    setNetWorth(newNetWorth);
  }, [appConfig.accounts]);

  // Helper to format numbers as currency.
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <header className="border-b pb-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            ProserPlan Dashboard
          </h1>
          <p className="text-gray-500">
            Your financial overview for {appConfig.activeMonth}
          </p>
        </header>

        <main>
          {/* Net Worth Display */}
          <section className="text-center bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">
              Current Net Worth
            </h2>
            <p
              className={`text-5xl font-bold mt-2 ${
                netWorth >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {formatCurrency(netWorth)}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;