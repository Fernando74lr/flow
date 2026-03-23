import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Expense } from '../../types/expenses';


const ELEMENT_DATA: Expense[] = [
  { title: 'Hydrogen', date: '2024-01-01', amount: 100, payment_type: 'Credit' },
  { title: 'Helium', date: '2024-01-02', amount: 200, payment_type: 'Debit' },
  { title: 'Lithium', date: '2024-01-03', amount: 300, payment_type: 'Credit' },
  { title: 'Beryllium', date: '2024-01-04', amount: 400, payment_type: 'Debit' },
];

@Component({
  selector: 'app-expense-table',
  imports: [MatTableModule],
  templateUrl: './expense-table.html',
  styleUrl: './expense-table.css',
})
export class ExpenseTable {
  displayedColumns: string[] = ['title', 'date', 'amount', 'payment_type'];
  dataSource = ELEMENT_DATA;
}
