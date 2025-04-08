import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'LEGRA-Technik GBR',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'LEGRA-Technik GBR | Kontakt',
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
    title: 'LEGRA-Technik GBR | Impressum',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'LEGRA-Technik GBR | Datenschutzerklärung',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'LEGRA-Technik GBR | Über Uns',
  },
  // { path: '**', component: PageNotFoundComponent }
];
