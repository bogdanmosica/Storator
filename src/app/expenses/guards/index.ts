import { ExpenseDetailGuard } from './expense-detail.guard';
import { ExpensesGuard } from './expenses.guard';

export const guards: any[] = [
  ExpensesGuard,
  ExpenseDetailGuard,
];

export * from './expenses.guard';
export * from './expense-detail.guard';
