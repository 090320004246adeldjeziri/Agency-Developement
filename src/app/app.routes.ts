import { provideRouter, RouterModule, Routes, withDebugTracing } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ApplicationConfig, NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'services',component:ServicesComponent},
    {path:'home',component:HomeComponent},
    {path:'project',component:ProjectPageComponent}
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
}
