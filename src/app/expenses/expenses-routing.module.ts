import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import * as fromGuards from './guards';

// pages
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    // canActivate: [fromGuards.ExpensesGuard],
    component: fromContainers.ExpensesComponent,
  },
  {
    path: 'detail/:expenseId',
    // canActivate: [
    //   fromGuards.ExpensesGuard,
    // ],
    component: fromContainers.ExpenseDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ExpensesRoutingModule {}
