import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryPageLandingPageComponent } from './component/primary-page-landing-page/primary-page-landing-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: PrimaryPageLandingPageComponent,
    title: 'Landing'
  },
  { 
    path: 'main', 
    component: PrimaryPageLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
