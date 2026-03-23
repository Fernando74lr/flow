import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isDarkTheme = signal(true);

  toggleTheme() {
    this.isDarkTheme.update((value) => !value);
    document.body.classList.toggle('light-theme', !this.isDarkTheme());
  }
}
