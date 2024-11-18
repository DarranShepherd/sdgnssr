import { Routes } from '@angular/router';
import { AcquisitionComponent } from './acquisition/acquisition.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'acquisition',
    component: AcquisitionComponent,
    title: 'Acquisition',
  },
  { path: '', redirectTo: '/acquisition', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
