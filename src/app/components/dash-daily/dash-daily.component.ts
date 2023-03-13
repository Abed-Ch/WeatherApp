import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherDataService } from 'src/app/services/WeatherData.Service/weather-data.service';

@Component({
  selector: 'app-dash-daily',
  templateUrl: './dash-daily.component.html',
  styleUrls: ['./dash-daily.component.scss'],
})
export class DashDailyComponent implements OnInit {
  protected dailyWeather: {
    time: string;
    code: number;
    precipitation: number;
    temperature: number;
    night: boolean;
    temperatureMax: number;
  }[];
  constructor(private weatherService: WeatherDataService) {}

  ngOnInit(): void {
    this.dailyWeather = this.weatherService.getDaily();
  }
  @ViewChild('Scrollable') scrollContainer: ElementRef;
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollLeft -= 250;
  }
  scrollRight() {
    this.scrollContainer.nativeElement.scrollLeft += 250;
  }
}
