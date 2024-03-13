import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.route') },
  { path: 'blog', loadChildren: () => import('./blog/blog.route') },

  { path: '', component: HomeComponent },
];
