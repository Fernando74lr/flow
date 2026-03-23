import { Component } from '@angular/core';
import { ExpenseForm } from '../expense-form/expense-form';
import { MatGridListModule } from '@angular/material/grid-list';
import { ExpenseTable } from '../expense-table/expense-table';
import { Balance } from '../balance/balance';

@Component({
  selector: 'app-home',
  imports: [ExpenseForm, MatGridListModule, ExpenseTable, Balance],
  templateUrl: 'home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
