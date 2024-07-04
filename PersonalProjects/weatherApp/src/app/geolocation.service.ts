import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface GeoLocationData {
  query: string;
  country: string;
  city: string;
  // ... other relevant fields
}

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
  private apiBaseUrl = 'http://ip-api.com/json/';

  constructor(private http: HttpClient) {}

  getGeoLocation(ipAddress: string = ''): Observable<GeoLocationData> {
    return this.http.get<GeoLocationData>(`${this.apiBaseUrl}${ipAddress}`);
  }

  getCoordinatesForCity(city: string): Observable<{lat: number, lon: number}> {
  // Call to a geocoding API to get lat and lon
    return this.http.get<{lat: number, lon: number}>('https://maps.googleapis.com/maps/api/geocode/json?address=' + city);
  
}
}
