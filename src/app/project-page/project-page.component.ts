import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterStateSnapshot } from '@angular/router';
import { routes } from '../app.routes';
import { ProjectModel } from '../models/projects_model';
import { ProjectsDataService } from '../services/projects-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent implements OnInit {
  data : ProjectModel = {
    name: "unloaded 1",
    desc: "Lorem ipsum",
    img_path: "img1.jpg",
    type: "desk",
    chalange: "lorem gah deusclkqg oakeu dqs jkeu aoe,",
    tec_used: "angular;firebase"
  };
  id: number = -1;
  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.queryParams['id']
  }
  ngOnInit(): void {
    try{
      this.data = ProjectsDataService.prooject_data[this.id];
    }catch{
      console.log("unloaded");
    }
  }
  


}
