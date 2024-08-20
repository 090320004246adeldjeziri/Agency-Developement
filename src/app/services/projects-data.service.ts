import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/projects_model';

@Injectable({
  providedIn: 'root'
})



export class ProjectsDataService {
  static readonly prooject_data : ProjectModel[] = [
    {
      name: "Crafting Mobile Experiences with Flutter",
      desc: "The portfolio website showcases mobile apps using mockups instead of live Play Store links. It’s fully responsive, optimized for fast loading, and features smooth navigation. The site also integrates social media links and a contact form, all designed to reflect the developer's professional brand.",
      img_path: "app/assets/images/portfolioFlutter/img2.png",
      type: "web",
      chalange: "The challenge was to design a portfolio website that effectively showcases mobile apps without Play Store access, using high-quality mockups. Ensuring the site’s responsiveness across all devices, optimizing for fast load times, and maintaining smooth navigation were crucial. Additionally, integrating social media, implementing SEO best practices, and presenting content that reflects the developer’s skills and brand posed significant challenges in delivering a professional and engaging user experience.",
      tec_used: "flutte,seo;mockups;responsive",
      link: "",
      vedio_url :"app/assets/images/portfolioFlutter/vedio.mp4",
      problem :"Creating a compelling portfolio website for a mobile developer presents the challenge of effectively showcasing applications that aren't available on the Play Store. The website needs to visually represent these apps through mockups while maintaining responsiveness across devices. Additionally, implementing smooth navigation, optimizing for SEO and load times, and ensuring seamless integration of social media and contact features are critical to providing a professional and engaging user experience."
    },
    
    {
      name : "Project web 1",
      desc : "Lorem ipsum" , 
      img_path : "img2.jpg",
      type : "web",
      chalange : "lorem gah deusclkqg oakeu dqs jkeu aoe,",
      tec_used : "angular;firebase",
      
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
  ngOnInit(): void { }

}
