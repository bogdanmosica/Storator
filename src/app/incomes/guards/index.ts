import { IncomeDetailGuard } from './income-detail.guard';
import { IncomeGuard } from './income.guard';

export const guards: any[] = [
  IncomeGuard,
  IncomeDetailGuard,
];

export * from './income.guard';
export * from './income-detail.guard';
