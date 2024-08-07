import { Routes } from '@angular/router';
import { HomeComponent as HomePageComponent } from './page/home/home.component';
import { AddComponent as AddPageComponent } from './page/add/add.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'add', component: AddPageComponent },
    { path: '**', redirectTo: 'home' },
];
