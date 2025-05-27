import { Routes } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { AboutUsComponent } from './components/site/about-us/about-us.component';
import { ContactUsComponent } from './components/site/contact-us/contact-us.component';
import { FaqComponent } from './components/site/faq/faq.component';

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
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
