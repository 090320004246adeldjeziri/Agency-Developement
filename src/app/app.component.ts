import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ServicesComponent } from "./services/services.component";
import { FooterComponent } from "./footer/footer.component";
<<<<<<< HEAD
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProjectSectionComponent } from "./project-section/project-section.component";
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
=======
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
>>>>>>> 01c2fb48a634a1c659e9fa637f5feb4e9a4d1e96

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [NavbarComponent, ServicesComponent, FooterComponent, RouterOutlet, ProjectSectionComponent],
=======
  imports: [NavbarComponent, ServicesComponent, FooterComponent, RouterOutlet, HomeComponent, MainComponent],
>>>>>>> 01c2fb48a634a1c659e9fa637f5feb4e9a4d1e96
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'devNovatech';
}
