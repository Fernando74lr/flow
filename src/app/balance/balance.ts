import { Component } from '@angular/core';

@Component({
  selector: 'app-balance',
  imports: [],
  templateUrl: './balance.html',
  styleUrl: './balance.css',
})
export class Balance {
  // Static data for demo
  cycleStart = '15 MAR';
  cycleEnd = '15 ABR';
  remainingBudget = '12,450.00';
  budgetLimit = '20,000.00';
}
