import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ServicesComponent } from "./services/services.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ProjectSectionComponent } from "./project-section/project-section.component";
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ServicesComponent, FooterComponent, RouterOutlet, ProjectSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'devNovatech';
}
