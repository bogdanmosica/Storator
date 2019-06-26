import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { ExpensesRoutingModule } from './expenses-routing.module';

// guards
import * as fromGuards from './guards';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';
import { ExpensesComponent } from './containers/expenses/expenses.component';
import { ExpenseDetailComponent } from './containers/expense-detail/expense-detail.component';
import { AddExpenseComponent } from './containers/add-expense/add-expense.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { ExpenseCardComponent } from './components/expense-card/expense-card.component';

@NgModule({
  imports: [
    SharedModule,
    ExpensesRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
    ...fromComponents.components,
  ],
  entryComponents: [
    ...fromContainers.entryComponents,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class ExpensesModule { }
