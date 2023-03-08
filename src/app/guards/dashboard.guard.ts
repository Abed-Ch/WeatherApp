import { CanActivate, Router, UrlTree } from '@angular/router';
import { WeatherDataService } from '../services/WeatherData.Service/weather-data.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  constructor(
    private weatherService: WeatherDataService,
    private router: Router
  ) {}
  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.weatherService.getWeather()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
