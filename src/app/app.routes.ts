// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'blog', component: BlogListComponent },
    { path: 'blog/:id', component: BlogPostComponent },
    { path: '**', redirectTo: '/blog', pathMatch: 'full' } // Catch-all route
];