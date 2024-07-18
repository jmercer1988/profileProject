import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { AppEffects } from './app.effects';
import { HeaderComponent } from './component/page-features/header/header.component';
import { FrontPageComponent } from './component/pages/front-page/front-page.component';
import { newsReducer } from './store/reducers/news.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FrontPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]), // Root effects
    StoreDevtoolsModule.instrument(),
    // ... Feature Modules ... 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}