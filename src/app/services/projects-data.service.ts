import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/projects_model';

@Injectable({
  providedIn: 'root'
})



export class ProjectsDataService {
  static readonly prooject_data : ProjectModel[] = [
    {
      name : "Project web 1",
      desc : "Lorem ipsum" , 
      img_path : "img1.jpg",
      type : "desk",
      chalange : "lorem gah deusclkqg oakeu dqs jkeu aoe,",
      tec_used : "angular;firebase"
    } ,
    
    {
      name : "Project web 1",
      desc : "Lorem ipsum" , 
      img_path : "img2.jpg",
      type : "web",
      chalange : "lorem gah deusclkqg oakeu dqs jkeu aoe,",
      tec_used : "angular;firebase"
    } ,
    {
      name : "Project web 1",
      desc : "Lorem ipsum" , 
      img_path : "img3.jpg",
      type : "web",
      chalange : "lorem gah deusclkqg oakeu dqs jkeu aoe,",
      tec_used : "angular;firebase"
    } ,
    {
      name : "Project web 1",
      desc : "Lorem ipsum" , 
      img_path : "img4.jpg",
      type : "mob",
      chalange : "lorem gah deusclkqg oakeu dqs jkeu aoe,",
      tec_used : "angular;firebase"
    } ,
    {
      name : "Project web 1",
      desc : "Lorem ipsum" , 
      img_path : "img1.jpg",
      type : "desk",
      chalange : "lorem gah deusclkqg oakeu dqs jkeu aoe,",
      tec_used : "angular;firebase"
    } ,
    {
      name : "Project web 1",
      desc : "Lorem ipsum" , 
      img_path : "img4.jpg",
      type : "web",
      chalange : "lorem gah deusclkqg oakeu dqs jkeu aoe,",
      tec_used : "angular;firebase"
    } ,
    {
      name : "Project web 1",
      desc : "Lorem ipsum" , 
      img_path : "img3.jpg",
      type : "web",
      chalange : "lorem gah deusclkqg oakeu dqs jkeu aoe,",
      tec_used : "angular;firebase"
    } ,

  ]
  constructor() { }
}
