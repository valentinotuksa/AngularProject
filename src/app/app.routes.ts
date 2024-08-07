import { Routes } from '@angular/router';
import { HomePageComponent as HomePageComponent } from './page/home/home-page.component';
import { AddPageComponent as AddPageComponent } from './page/add/add-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'add', component: AddPageComponent },
    { path: '**', redirectTo: 'home' },
];
