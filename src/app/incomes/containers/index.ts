import { IncomesComponent } from './incomes/incomes.component';
import { IncomeDetailComponent } from './income-detail/income-detail.component';
import { AddIncomeComponent } from './add-income/add-income.component';

export const components: any[] = [
  IncomesComponent,
  IncomeDetailComponent,
  AddIncomeComponent,
];

export const entryComponents: any[] = [
  AddIncomeComponent,
];

export * from './add-income/add-income.component';
export * from './income-detail/income-detail.component';
export * from './incomes/incomes.component';
