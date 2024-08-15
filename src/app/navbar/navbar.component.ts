import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    
  ],  // Import MatToolbarModule here
})
export class NavbarComponent {
  showNavLinks = false;  // Initial state is hidden

  toggleNavLinks() {
    this.showNavLinks = !this.showNavLinks; // Toggle visibility
  }

 
}
