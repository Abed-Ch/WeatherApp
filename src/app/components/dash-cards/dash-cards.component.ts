import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { WeathericonsService } from 'src/app/services/WeatherIcons.Service/weathericons.service';

@Component({
  selector: 'app-dash-cards',
  templateUrl: './dash-cards.component.html',
  styleUrls: ['./dash-cards.component.scss'],
})
export class DashCardsComponent implements OnInit {
  @Input() weatherObject: {
    time: string;
    code: number;
    precipitation: number;
    temperature: number;
    night: boolean;
    temperatureMax?: number;
  };
  @ViewChild('IconContainer', { static: true }) icon: ElementRef;
  constructor(private weatherIcons: WeathericonsService) {}

  async ngOnInit(): Promise<void> {
    let pathObj = await this.weatherIcons.getIcon(this.weatherObject.code);
    this.icon.nativeElement.innerHTML = await this.weatherIcons.fetchIcon(
      pathObj.nightPath && this.weatherObject.night
        ? pathObj.nightPath
        : pathObj.path
    );
  }
}
