import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  Income,
  IncomeRequest,
  IncomeResponse,
} from '../models';


@Injectable({
  providedIn: 'root'
})
export class IncomeApiService {

  private headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692266292476821c9d02",
    "cache-control": "no-cache"
  }

  private url: string = "https://moneytracker-5a2f.restdb.io/rest/incomelist";

  constructor(private http: HttpClient) {}

  list(): Observable<IncomeResponse[]> {
    return this.http.get<IncomeResponse[]>(this.url, { headers: this.headers })
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  delete(id: string): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id, { headers: this.headers });
  }

  save(income: IncomeRequest): Observable<IncomeRequest> {
    return this.http.post<IncomeRequest>(this.url, income, { headers: this.headers });
  }

  update(income: IncomeRequest): Observable<IncomeRequest> {
    return this.http.put<IncomeRequest>(this.url + '/' + income._id, income, { headers: this.headers });
  }

  getIncome(id: string): Observable<IncomeResponse> {
    var response = map((response: IncomeResponse) => {
      return response;
    });
    return response(this.http.get<IncomeResponse>(this.url + '/' + id, { headers: this.headers }))
  }

  listByDate(startDate: Date, endDate: Date) {
    var queryUrl = this.url + '?q={"date":{"$gt":{"$date":"' + startDate + '"},"$lt":{"$date":"' + endDate + '"}}}'
    var responseObservable = map((response: Response) => {
      return response.json();
    });
    return responseObservable(this.http.get<Response>(queryUrl, { headers: this.headers }))
  }

}
