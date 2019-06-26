import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, zip, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class IncomeGuard implements CanActivate {
  constructor(private store: Store<fromStore.IncomeState>) {
  }

  canActivate(): Observable<boolean> {
    return this.check()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getIncomesLoaded))
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadIncomes());
          }
        }),
        filter(loaded => loaded),
        take(1)
      );
  }

  check(): Observable<boolean> {
    return zip(
      this.store.pipe(select(fromStore.getIncomesLoaded)),
      this.store.pipe(select(fromStore.getIncomeCategoriesLoaded)),
      (
        aIncomesLoaded: boolean,
        aCategoriesLoaded: boolean,
      ) => {
        let allLoaded = true;
        if (!aIncomesLoaded) {
          this.store.dispatch(new fromStore.LoadIncomes());
          allLoaded = false;
        }

        if (!aCategoriesLoaded) {
          this.store.dispatch(new fromStore.LoadIncomeCategories());
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
