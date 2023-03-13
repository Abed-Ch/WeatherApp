import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherDataService } from 'src/app/services/WeatherData.Service/weather-data.service';

@Component({
  selector: 'app-dash-hourly',
  templateUrl: './dash-hourly.component.html',
  styleUrls: ['./dash-hourly.component.scss'],
})
export class DashHourlyComponent implements OnInit {
  protected hourlyWeather: {
    time: string;
    code: number;
    precipitation: number;
    temperature: number;
    night: boolean;
  }[];
  constructor(private weatherService: WeatherDataService) {}

  ngOnInit(): void {
    this.hourlyWeather = this.weatherService.getHourly();
  }
  @ViewChild('Scrollable') scrollContainer: ElementRef;
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollLeft -=
      this.scrollContainer.nativeElement.clientWidth / 4;
  }
  scrollRight() {
    this.scrollContainer.nativeElement.scrollLeft +=
      this.scrollContainer.nativeElement.clientWidth / 4;
  }
}
