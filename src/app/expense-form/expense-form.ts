import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Expense } from '../../types/expenses';

@Component({
  selector: 'app-expense-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './expense-form.html',
  styleUrl: './expense-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseForm {
  // Initiate form builder
  private readonly formBuilder = inject(FormBuilder);

  // Create expense form with initial values
  readonly expenseForm = this.formBuilder.nonNullable.group({
    title: [''],
    amount: [0],
    notes: [''],
    fixed: [false],
    date: [''],
  });

  // Create independent inputs for cards selection and fixed payment
  readonly cardLabelControl = new FormControl<'TDC' | 'TDD'>('TDC', { nonNullable: true });
  readonly isFixedPayment = new FormControl(false, { nonNullable: true });

  // Create Expense object
  createExpense(): Expense {
    // Get raw form values, including disabled controls if any
    const formValue = this.expenseForm.getRawValue();

    // Generate current ISO date
    const currentDate = new Date().toISOString()

    // Create Expense instance
    const expense: Expense = {
      ...formValue,
      payment_type: this.cardLabelControl.value,
      fixed: this.isFixedPayment.value,
      date: currentDate,
      created_at: currentDate,
      updated_at: currentDate,
    };

    // Clean form
    this.expenseForm.reset();

    // TODO: remove log
    console.log(expense);

    return expense;
  }
}
