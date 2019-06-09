import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  IncomeCategory,
  IncomeCategoryRequest,
  IncomeCategoryResponse,
} from '../models';

@Injectable({
  providedIn: 'root'
})

export class IncomeCategoryApiService {

  private headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692266292476821c9d02",
    "cache-control": "no-cache"
  }

  private url: string = "https://moneytracker-5a2f.restdb.io/rest/incomecategory"

  constructor(private http: HttpClient) {}

  listCategory(): Observable<IncomeCategoryResponse[]> {
    return this.http.get<IncomeCategoryResponse[]>(this.url, { headers: this.headers })
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

}
