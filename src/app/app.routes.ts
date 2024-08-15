import { Routes, withDebugTracing } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
   
    {path:'',component:HomeComponent},
    {path:'services',component:ServicesComponent},
    {path:'home',component:HomeComponent}

];
// export const appConfig: ApplicationConfig = {
//     providers: [provideRouter(routes)]
// }
