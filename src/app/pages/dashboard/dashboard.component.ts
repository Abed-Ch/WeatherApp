import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { WeatherDataService } from 'src/app/services/WeatherData.Service/weather-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  @ViewChild('test', { static: true }) cont: ElementRef;

  constructor(private weatherService: WeatherDataService) {}

  ngOnInit(): void {
    let data = this.weatherService.getWeather();
    console.log(data);
    fetch('../../../assets/Showers-Heavy-Day.svg')
      .then((result) => result.text())
      .then((svg) => {
        let div: HTMLDivElement = document.createElement('div');
        div.innerHTML = svg;
        this.cont.nativeElement.appendChild(div);
      });
  }
}
