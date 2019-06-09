import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../core/store';

@Injectable()
export class LoadExpenseCategoriesGuard implements CanActivate {
  constructor(private store: Store<fromStore.ExpenseState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkCategories()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  checkCategories(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getExpenseCategoriesLoaded))
      .pipe(
        tap(aLoaded => {
          if (!aLoaded) {
            this.store.dispatch(new fromStore.LoadExpenseCategories());
          }
        }),
        filter(aLoaded => aLoaded),
        take(1)
      );
  }
}
