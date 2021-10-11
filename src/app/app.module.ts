import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/expenses', pathMatch: 'full'
  },
  {
    path: 'expenses', 
    component: ListExpensesComponent
  },
  {
    path: 'addExpenses',
    component: AddExpenseComponent
  }
]
@NgModule({
  declarations: [		
    AppComponent,
      AddExpenseComponent,
      ListExpensesComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
