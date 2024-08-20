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
      name: "Medical E-commerce App for SHESEM Hackathon", 
      desc: "Developed a mobile medical e-commerce application as part of the SHESEM hackathon at University of Oran 1. The app features approximately seven pages and was built using Flutter for the frontend and Strapi (Node.js) for the backend. The entire project was completed within a 24-hour timeframe.", 
      img_path: "https://media.licdn.com/dms/image/v2/D4E22AQGNIYu-yZQwdw/feedshare-shrink_1280/feedshare-shrink_1280/0/1723224550332?e=1727308800&v=beta&t=dZtHdi0WfpyzZjlANJpC_5ej01dAb7Q_TkSASAY0HSE", 
      type: "mobile", 
      chalange: "Developing a fully functional medical e-commerce app within a 24-hour timeframe, while ensuring a user-friendly interface and secure data handling.", 
      tec_used: "flutter,nodejs,strapi", 
      link: "", 
      vedio_url: "app/assets/images/portfolioFlutter/vedio.mp4", 
      problem: "The challenge was to rapidly develop a comprehensive medical e-commerce solution that meets user needs and complies with healthcare regulations, all within a limited time frame." 
    } ,
    {
      name: "Inventory Management Software", 
      desc: "Developed inventory management software to streamline inventory and storage operations. The application features approximately six pages and prioritizes optimized performance for low-specification computers. Robust security measures were implemented, including a unique program version licensing system and data encryption. The software boasts a modern and visually appealing user interface.", // Description based on the paragraph
      img_path: "app/assets/images/portfolioFlutter/img2.png", 
      type: "software", 
      chalange: "Ensuring optimal performance on low-end computers while implementing robust security features (licensing & encryption) and a user-friendly interface.", 
      tec_used: "to be specified", 
      link: "", 
      vedio_url: "https://lnkd.in/eDfTtw8x", 
      problem: "The challenge was to create inventory management software that functions efficiently on low-powered computers, while maintaining robust security measures to protect sensitive data and offering a user-friendly experience for efficient inventory management." 
    } ,
    {
      name: "Binary Data Analytics and Frontend/Backend Development",
      desc: "Completed a comprehensive project focused on binary data analytics, exploring file management, data cleaning, analytics, binary operations, logical manipulation, tables, binary files, threading, parallelism, and synchronous tasks. Leveraged Python's capabilities for efficient handling of complex operations. Enhanced frontend skills with UI/UX design, MVVM architecture, services, data binding, and animations. Strengthened backend expertise in REST APIs, queries, authorization, and local area network development. Utilized .NET WPF (C#) and Django REST framework (Python) over four months.",
      img_path: "app/assets/images/portfolioFlutter/img2.png", 
      type: "software",
      chalange: "Combining binary data analytics with frontend and backend development to create a robust and efficient application.",
      tec_used: "python, c#, .net wpf, django rest framework",
      link: "", 
      vedio_url: "", 
      problem: "Effectively processing and analyzing binary data while developing a user-friendly interface and secure backend system presented significant challenges."
    } ,
    {
      name: "DAW Module Website Project",
      desc: "Developed a website as a project for a DAW (Digital Audio Workstation) module. The website features approximately 10 pages, each offering three customizable themes (light & dark) for user preference. Explore the functionalities of each page in the video: https://lnkd.in/ep9Vf2aD",
      img_path: "app/assets/images/portfolioFlutter/img2.png", 
      type: "web", 
      chalange: "Designing and developing a user-friendly website with multiple customizable themes within a limited timeframe.", 
      tec_used: "html,css,javascript,php", 
      link: "", 
      vedio_url: "https://lnkd.in/ep9Vf2aD", 
      problem: "The challenge was to create a visually appealing and interactive website for a DAW module within a short timeframe, incorporating customizable themes for user personalization."
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
