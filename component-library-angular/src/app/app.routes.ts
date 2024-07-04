import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeComponent } from './components/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },         // Home (root path)
    { path: 'about', component: AboutComponent },   
    { path: 'contact', component: ContactComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'privacy', component: PrivacyPolicyComponent },
    { path: 'terms', component: TermsOfServiceComponent }
];
