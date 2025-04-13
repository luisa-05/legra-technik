import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavModalComponent } from './nav-modal/nav-modal.component';

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
