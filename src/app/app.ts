import { Component } from '@angular/core';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar],
  template: `
    <main>
      <app-navbar />
      <section class="content">
        <app-home />
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
}
