import { Component, Input } from '@angular/core';
import { ProjectModel } from '../../models/projects_model';
import { RouterLink, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id: Number = 0;
  @Input() data: ProjectModel = {
    name: "unloaded 1",
    desc: "Lorem ipsum",
    img_path: "img1.jpg",
    type: "desk",
    chalange: "lorem gah deusclkqg oakeu dqs jkeu aoe,",
    tec_used: "angular;firebase"
  };
}
