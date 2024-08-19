import { Component } from '@angular/core';
import { MainComponent } from "../main-section/main.component";
import { ProjectSectionComponent } from "../project-section/project-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, ProjectSectionComponent],
  templateUrl : './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
