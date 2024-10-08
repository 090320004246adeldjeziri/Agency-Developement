import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';
import { ProjectsDataService } from '../services/projects-data.service';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css'
})
export class ProjectSectionComponent {
  getClassAnimation(index:number) {
    return "animate-fade-up animate-once animate-delay-200";
  }
  projectData = ProjectsDataService.prooject_data;
}
