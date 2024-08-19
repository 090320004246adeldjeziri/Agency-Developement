import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar-section/navbar.component";
import { ServicesComponent } from "./service-section/services.component";
import { FooterComponent } from "./footer-section/footer.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home-page/home.component";
import { MainComponent } from "./main-section/main.component";
import { ProjectSectionComponent } from "./project-section/project-section.component";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, ServicesComponent, FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'devNovatech';
}
function initFlowbite() {
  throw new Error('Function not implemented.');
}

