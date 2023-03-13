import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherDataService } from 'src/app/services/WeatherData.Service/weather-data.service';

@Component({
  selector: 'app-weather-details1',
  templateUrl: './weather-details1.component.html',
  styleUrls: ['./weather-details1.component.scss'],
})
export class WeatherDetails1Component implements OnInit, OnDestroy {
  private clockInterval: NodeJS.Timeout;
  protected time: string[];
  protected temperatureMin: string;
  protected temperatureMax: string;
  protected windSpeed: string;
  protected cityName: string;
  protected windDirection = {
    '--i': '0',
  };
  constructor(private weatherService: WeatherDataService) {}

  ngOnInit(): void {
    this.clockInterval = setInterval(() => {
      this.time = new Date()
        .toLocaleTimeString([], {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
        })
        .split(' ');
    }, 1000);
    this.getData();
  }
  getData() {
    let data = this.weatherService.getDetailPart1();
    this.cityName = data.city;
    this.temperatureMax = data.TempMax.toString();
    this.temperatureMin = data.TempMin.toString();
    this.windSpeed = data.windSpeed.toString();
    this.windDirection['--i'] = '-' + data.windDirection.toString() + 'deg';
  }
  ngOnDestroy(): void {
    clearInterval(this.clockInterval);
  }
}
