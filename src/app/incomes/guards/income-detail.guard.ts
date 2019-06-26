import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class IncomeDetailGuard implements CanActivate {
  constructor(private store: Store<fromStore.IncomeState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const theIncomeId = parseInt((route.params as any).incomeId, 10);

    return this.hasDetailedIncome(theIncomeId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  hasDetailedIncome(aId: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.hasDetailByIncomeId(aId)))
      .pipe(
        tap((hasDetail: boolean) => {
          if (!hasDetail) {
            this.store.dispatch(new fromStore.LoadIncomeDetail(aId));
          }
        }),
        filter((hasDetail: boolean) => hasDetail),
        take(1)
      );
  }
}
