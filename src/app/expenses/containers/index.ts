import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';

export const components: any[] = [
  ExpensesComponent,
  ExpenseDetailComponent,
  AddExpenseComponent,
];

export const entryComponents: any[] = [
  AddExpenseComponent,
];

export * from './add-expense/add-expense.component';
export * from './expense-detail/expense-detail.component';
export * from './expenses/expenses.component';
