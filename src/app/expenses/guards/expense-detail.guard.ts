import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class ExpenseDetailGuard implements CanActivate {
  constructor(private store: Store<fromStore.ExpenseState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const theExpenseId = parseInt((route.params as any).expenseId, 10);

    return this.hasDetailedExpense(theExpenseId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  hasDetailedExpense(aId: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.hasDetailByExpenseId(aId)))
      .pipe(
        tap((hasDetail: boolean) => {
          if (!hasDetail) {
            this.store.dispatch(new fromStore.LoadExpenseDetail(aId));
          }
        }),
        filter((hasDetail: boolean) => hasDetail),
        take(1)
      );
  }
}
