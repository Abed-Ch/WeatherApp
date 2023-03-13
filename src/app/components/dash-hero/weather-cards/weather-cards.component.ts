import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherDataService } from 'src/app/services/WeatherData.Service/weather-data.service';
import { WeathericonsService } from 'src/app/services/WeatherIcons.Service/weathericons.service';

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: ['./weather-cards.component.scss'],
})
export class WeatherCardsComponent implements OnInit {
  @ViewChild('iconHouse', { static: true }) weatherIcon: ElementRef;
  protected temperature: string;
  protected weatherStatus: string;
  private weatherCode: number;
  constructor(
    private weatherService: WeatherDataService,
    private weatherIcons: WeathericonsService
  ) {}

  async ngOnInit() {
    let weatherData = this.weatherService.getMainCardData();
    this.weatherCode = weatherData.weatherCode;
    this.temperature = weatherData.temperature.toString();
    let weatherIconsObj = this.weatherIcons.getIcon(this.weatherCode);
    this.weatherStatus = weatherIconsObj.title;
    let weatherIcon = await this.weatherIcons.fetchIcon(
      weatherData.night && weatherIconsObj.nightPath
        ? weatherIconsObj.nightPath
        : weatherIconsObj.path
    );
    this.weatherIcon.nativeElement.innerHTML = weatherIcon;
  }
}
