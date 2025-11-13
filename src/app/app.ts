import { Component, signal } from '@angular/core';
import { Welcome } from './welcome/welcome';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('tp4');
}
