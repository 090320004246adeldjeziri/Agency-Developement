import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ServicesComponent } from "./services/services.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, ServicesComponent, FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devNovatech';
}
