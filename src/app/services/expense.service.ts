import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Expense } from './../model/expense';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private getUrl: string = "http://localhost:8080/api/v1/expenses";
  constructor(private httpClient: HttpClient) { }

  getExpense(): Observable<Expense[]>{
    return this.httpClient.get<Expense[]>(this.getUrl).pipe(
      map(response => response)
      )
  }

  saveExpense(expense: Expense): Observable<Expense>{
    return this.httpClient.post<Expense>(this.getUrl, expense);
  }

  getExpenseById(id: number): Observable<Expense>{
    return this.httpClient.get<Expense>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
      )
  }
}
