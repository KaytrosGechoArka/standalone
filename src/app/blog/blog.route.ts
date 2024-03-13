import { Route } from '@angular/router';
import { DocsComponent } from './docs/docs.component';
import { AboutComponent } from './about/about.component';

export default [
  { path: 'docs', component: DocsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/blog/docs', pathMatch: 'full' },
] as Route[];
