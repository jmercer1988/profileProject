import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherModModule } from './modules/weather-mod/weather-mod.module';
import { WeatherServiceService } from './weather-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { LocationSelectorComponent } from './components/location-selector/location-selector.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    LocationSelectorComponent,
    WeatherChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModModule,
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }