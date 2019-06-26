import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, zip, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class ExpensesGuard implements CanActivate {
  constructor(private store: Store<fromStore.ExpenseState>) {
  }

  canActivate(): Observable<boolean> {
    return this.check()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getExpensesLoaded))
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadExpenses());
          }
        }),
        filter(loaded => loaded),
        take(1)
      );
  }

  check(): Observable<boolean> {
    return zip(
      this.store.pipe(select(fromStore.getExpensesLoaded)),
      this.store.pipe(select(fromStore.getExpenseCategoriesLoaded)),
      (
        aExpensesLoaded: boolean,
        aCategoriesLoaded: boolean,
      ) => {
        let allLoaded = true;
        if (!aExpensesLoaded) {
          this.store.dispatch(new fromStore.LoadExpenses());
          allLoaded = false;
        }

        if (!aCategoriesLoaded) {
          this.store.dispatch(new fromStore.LoadExpenseCategories());
          allLoaded = false;
        }

        return allLoaded;
      }
    ).pipe(
      filter(loaded => loaded),
      take(1)
    );
  }
}
