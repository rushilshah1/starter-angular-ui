import { Routes } from '@angular/router';
import { AboutRootComponent } from './about-module/about-root/about-root.component';
import { HomeRootComponent } from './home-module/home-root/home-root.component';
import { ContactRootComponent } from './contact-module/contact-root/contact-root.component';

export const ROUTES: Routes = [
    { path: 'about', component: AboutRootComponent },
    { path: 'contact', component: ContactRootComponent },
    { path: '**', component: HomeRootComponent }
];
