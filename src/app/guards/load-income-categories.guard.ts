import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../core/store';

@Injectable()
export class LoadIncomeCategoriesGuard implements CanActivate {
  constructor(private store: Store<fromStore.IncomeState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkCategories()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  checkCategories(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getIncomeCategoriesLoaded))
      .pipe(
        tap(aLoaded => {
          if (!aLoaded) {
            this.store.dispatch(new fromStore.LoadIncomeCategories());
          }
        }),
        filter(aLoaded => aLoaded),
        take(1)
      );
  }
}
