import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../weather-service.service';
import { WeatherData } from '../../modules/weather-mod/weather-mod.module';
import { GeoLocationService } from '../../geolocation.service';
import { Long } from 'mongodb';
@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  weatherData?: WeatherData;
  errorMessage?: string;

  constructor(private WeatherServiceService: WeatherServiceService, private GeoLocationService: GeoLocationService) {}

  ngOnInit() {
    const lat = 51.5073509;
    const lon = -0.1277583;
    this.WeatherServiceService.getWeatherForLocation(lat, lon).subscribe(
      data => this.weatherData = data,
        error => this.errorMessage = error);
    this.getWeatherData('London'); // Replace 'London' with the desired city
  }

  getWeatherData(city: string) {
    this.WeatherServiceService.getWeatherForLocation(lat, lon)
      .subscribe(
        data => this.weatherData = data,
        error => this.errorMessage = error
      );
  }
}
