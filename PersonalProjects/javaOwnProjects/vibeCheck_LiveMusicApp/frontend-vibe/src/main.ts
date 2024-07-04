import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from './environments/environment';
import { routes } from './app/app.routes';
import { HttpClientModule } from "@angular/common/http";
// FormsModule import can be removed if not used globally

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule)
    // ... other global providers ...
  ],
}).catch(err => console.error(err));
