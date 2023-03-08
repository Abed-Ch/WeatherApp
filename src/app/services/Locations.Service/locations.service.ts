import { Injectable } from '@angular/core';

import { WeatherDataService } from '../WeatherData.Service/weather-data.service';
import { LocationInterface } from 'src/app/Interfaces/Location.interface';
import { CityApiService } from '../CityApi.Service/city-api.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private longitude: number;
  private latitude: number;
  private data: LocationInterface[] | undefined;
  private chosenLocation: LocationInterface;
  private hasNext: boolean;
  constructor(
    private weatherData: WeatherDataService,
    private cityApi: CityApiService,
    private router: Router
  ) {}

  getCityNames(prefix: string): Observable<LocationInterface[] | undefined> {
    return this.cityApi.fetchLocations(prefix).pipe(
      tap((locations: LocationInterface[] | undefined) => {
        this.data = locations;
        this.hasNext = this.cityApi.getNext();
      })
    );
  }

  reset() {
    this.data = undefined;
    this.hasNext = true;
    this.latitude = 0;
    this.longitude = 0;
    this.cityApi.reset();
  }
  getNext(): boolean {
    return this.hasNext;
  }
  autoLocate(): void {
    window.navigator.geolocation.getCurrentPosition(
      async (val) => {
        this.longitude = val.coords.longitude;
        this.latitude = val.coords.latitude;
        this.getWeather();
      },
      (error) => console.error(error)
    );
  }

  async setChosenLocation(data: LocationInterface) {
    await (this.chosenLocation = data);
    this.latitude = data.altitude;
    this.longitude = data.longitude;
    this.getWeather();
  }
  async getWeather() {
    await this.weatherData.fetchWeatherData(this.latitude, this.longitude);
    this.router.navigate(['dashboard']);
  }
  getChosenLocation() {
    return this.chosenLocation;
  }
}
