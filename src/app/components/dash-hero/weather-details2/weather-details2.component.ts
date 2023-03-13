import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/WeatherData.Service/weather-data.service';

@Component({
  selector: 'app-weather-details2',
  templateUrl: './weather-details2.component.html',
  styleUrls: ['./weather-details2.component.scss'],
})
export class WeatherDetails2Component implements OnInit, OnDestroy {
  protected date: string;
  private interval: NodeJS.Timeout;
  protected weatherData: {
    apparentTempMax: number;
    apparentTempMin: number;
    precipitation: number;
    sunRise: string;
    sunSet: string;
  };
  constructor(private weatherService: WeatherDataService) {}
  ngOnInit(): void {
    this.date = new Date().toLocaleDateString();
    this.interval = setInterval(() => {
      this.date = new Date().toLocaleDateString();
    }, 60000);
    this.weatherData = this.weatherService.getDetailPart2();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
