import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  Expense,
  ExpenseRequest,
  ExpenseResponse,
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExpenseApiService {

  private headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692266292476821c9d02",
    "cache-control": "no-cache"
  }

  private url: string = "https://moneytracker-5a2f.restdb.io/rest/expenselist";

  constructor(private http: HttpClient) {}

  list(): Observable<ExpenseResponse[]> {
    return this.http.get<ExpenseResponse[]>(this.url, { headers: this.headers })
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  save(expense: Expense): Observable<ExpenseRequest> {
    return this.http.post<Expense>(this.url, expense, { headers: this.headers });
  }

  delete(id: string): Observable<ExpenseRequest> {
    return this.http.delete<ExpenseRequest>(this.url + '/' + id, { headers: this.headers });
  }

  update(id: string, expense: ExpenseRequest) {
    return this.http.put(this.url + '/' + id, expense, { headers: this.headers });
  }

  getExpense(id: string) {
    var responseObservable = map((response: ExpenseResponse) => {
      return response;
    });
    return responseObservable(this.http.get<ExpenseResponse>(this.url + '/' + id, { headers: this.headers }))
  }

  listByDate(startDate: Date, endDate: Date) {
    var queryUrl = this.url + '?q={"date":{"$gt":{"$date":"' + startDate +'"},"$lt":{"$date":"' + endDate +'"}}}'
    var response = map((response: ExpenseResponse) => {
      return response;
    });
    return response(this.http.get<ExpenseResponse>(queryUrl, { headers: this.headers }))
  }
}
