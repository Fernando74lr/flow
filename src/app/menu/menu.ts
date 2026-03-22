import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [MatChipsModule, MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  menuOptions = [
    {
      name: 'Inicio',
      icon: 'home',
      colorClass: 'chip-primary', // Primary blue
    },
    {
      name: 'Tarjetas',
      icon: 'credit_card',
      colorClass: 'chip-accent', // Secondary purple
    },
    {
      name: 'Préstamos',
      icon: 'payments',
      colorClass: 'chip-warn', // Error red
    },
    {
      name: 'Categorías',
      icon: 'category',
      colorClass: 'chip-secondary', // Success green
    },
    {
      name: 'Ingresos',
      icon: 'account_balance_wallet',
      colorClass: 'chip-tertiary', // Info blue
    },
  ];
}
