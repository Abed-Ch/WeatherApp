import { Injectable } from '@angular/core';

import { WeatherDataService } from '../WeatherData.Service/weather-data.service';
import { LocationInterface } from 'src/app/Interfaces/Location.interface';
import { CityApiService } from '../CityApi.Service/city-api.service';
import { Observable, tap } from 'rxjs';

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
    private cityApi: CityApiService
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
        let weather = await this.weatherData.getWeatherData(
          this.latitude,
          this.longitude
        );
      },
      (error) => console.error(error)
    );
  }

  setChosenLocation(id: number) {}

  getChosenLocation() {
    return this.chosenLocation;
  }
}
