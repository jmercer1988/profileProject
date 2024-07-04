import { Routes } from '@angular/router';
import {BandComponent} from "./component/band/band.component";
import {EventsComponent} from "./component/events/events.component";
import {LoginComponent} from "./component/login/login.component";
import {UserProfileComponent} from "./component/user-profile/user-profile.component";
import {MainComponent} from "./component/main/main.component";
import {RegistrationComponent} from "./component/registration/registration.component";

export const routes: Routes = [
  { path: '', redirectTo: '/mainPage', pathMatch: 'full' },
  { path: 'mainPage', component: MainComponent},
  { path: 'band', component: BandComponent },
  { path: 'events', component: EventsComponent},
  { path: 'loginPage', component: LoginComponent},
  { path: 'registerPage', component: RegistrationComponent},
  { path: 'profile', component: UserProfileComponent},
];
