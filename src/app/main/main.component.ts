import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent,ServicesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
