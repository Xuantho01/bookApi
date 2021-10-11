import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss']
})
export class ListExpensesComponent implements OnInit {

  expense: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getExpense()
      .subscribe(data => this.expense = data);
  
  }

}
