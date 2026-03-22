import { Component } from '@angular/core';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Menu } from "./menu/menu";

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, Menu],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
})
export class App {
  title = 'default';
}
