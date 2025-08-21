import { Routes } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { AboutUsComponent } from './components/site/about-us/about-us.component';
import { ContactUsComponent } from './components/site/contact-us/contact-us.component';
import { FaqComponent } from './components/site/faq/faq.component';
import { LoginComponent } from './components/account/login/login.component';
import { LoggedOutGuard } from './core/guards/auth/logged-out/logged-out.guard';
import { LoggedInGuard } from './core/guards/auth/logged-in/logged-in.guard';
import { ProfileComponent } from './components/account/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'account/login',
        component: LoginComponent,
        canActivate: [LoggedOutGuard]
    },
    {
        path: 'account/profile',
        component: ProfileComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
