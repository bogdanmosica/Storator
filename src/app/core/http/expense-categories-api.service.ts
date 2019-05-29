import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ExpenseCategory,
  ExpenseCategoryRequest,
  ExpenseCategoryResponse,
} from '../models';

@Injectable({
  providedIn: 'root'
})

export class ExpenseCategoryApiService {

  private headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692266292476821c9d02",
    "cache-control": "no-cache"
  }

  private url: string = "https://moneytracker-5a2f.restdb.io/rest/expensecategory"

  constructor(private http: HttpClient) {}

  listCategory(): Observable<ExpenseCategoryResponse[]> {
    var response = map((response: ExpenseCategoryResponse[]) => {
      return response;
    });
    return response(this.http.get(this.url, {headers: this.headers}))
  }

}
