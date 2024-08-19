// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { ServicesComponent } from './service-section/services.component';
import { BlogListComponent } from './blog-list-page/blog-list.component';
import { BlogPostComponent } from './blog-post-page/blog-post.component';
import { ProjectPageComponent } from './project-page/project-page.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path:'project',component:ProjectPageComponent},
    { path: 'blog', component: BlogListComponent },
    { path: 'blog/:id', component: BlogPostComponent },
    { path: '**', redirectTo: '/blog', pathMatch: 'full' } // Catch-all route
];