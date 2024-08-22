# DevNovatech

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Some ruls abour the Projects Data structure

follow the same pattern when filling the data of projects 
access to the service file : app>services>project-dataservice.ts
add data using following this example :

    {
      name*: "Project name", 
      desc*: "description about the project", 
      type*: "mobile", 
      chalange*: "the challange of this project", 
      tec_used*: "tech,separated,by,cama", 
      link*: "url assosiated with this project", 
      vedio_url: "url or (the full path starting from app>assets>.. ex:app/assets/images/portfolioFlutter/vedio.mp4)", 
      problem: "The original probleme to this solution" 
    }
