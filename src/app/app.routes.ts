import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavModalComponent } from './components/nav-modal/nav-modal.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'LEGRA-Technik',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'LEGRA-Technik | Kontakt',
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
    title: 'LEGRA-Technik | Impressum',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'LEGRA-Technik | Datenschutzerklärung',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'LEGRA-Technik | Über Uns',
  },
  {
    path: 'nav-modal',
    component: NavModalComponent,
  },
  // { path: '**', component: PageNotFoundComponent }
];
