import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() {
    // Any other initialization logic can go here
  }
}
