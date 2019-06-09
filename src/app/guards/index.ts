import { LoadIncomeCategoriesGuard } from '../guards/load-income-categories.guard';
import { LoadExpenseCategoriesGuard } from '../guards/load-expense-categories.guard';

export const guards: any[] = [LoadIncomeCategoriesGuard, LoadExpenseCategoriesGuard];

export * from './load-income-categories.guard';
export * from './load-expense-categories.guard';
