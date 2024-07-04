import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData, ForecastData } from './modules/weather-mod/weather-mod.module';

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {
  private weatherUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}' //replace 
  private weatherApiKey = 'f50763a79f2d4f94793e52682763a1c5'; //replace with your own api key
  
  constructor(private http: HttpClient) { }

  getWeatherForLocation(lat: number, lon: number): Observable<WeatherData> {
    const url = `${this.weatherApiKey}?lat=${lat}&lon=${lon}&appid=${this.weatherApiKey}&units=metric`;
      const params = new HttpParams()
      //retrieve weather data for a given location
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('appid', this.weatherApiKey)
      .set('units','metric');

      return this.http.get<WeatherData>(this.weatherUrl + 'weather', {params});
  }

  getForecastForLocation(lat: number, lon: number): Observable<ForecastData> {
      const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('appid', this.weatherApiKey)
      .set('units','metric');

      return this.http.get<ForecastData>(this.weatherUrl + 'onecall', {params});
  }
}