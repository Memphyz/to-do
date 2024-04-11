import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MainComponent } from './shared/components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];
