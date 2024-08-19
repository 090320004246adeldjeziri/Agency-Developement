import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar-section/navbar.component";
import { ServicesComponent } from '../service-section/services.component';
import { KeyFiguresComponent } from "../key-figures-section/key-figures.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, ServicesComponent, KeyFiguresComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
