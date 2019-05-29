import { ExpenseApiService } from './expense-api.service';
import { ExpenseCategoryApiService } from './expense-categories-api.service';
import { IncomeApiService } from './income-api.service';
import { IncomeCategoryApiService } from './income-categories-api.service';

export const httpServices: any[] = [
  ExpenseApiService,
  ExpenseCategoryApiService,
  IncomeApiService,
  IncomeCategoryApiService,
];

export * from './expense-api.service';
export * from './expense-categories-api.service';
export * from './income-api.service';
export * from './income-categories-api.service';
