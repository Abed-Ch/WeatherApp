import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/services/Themes.Service/themes.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherCardComponent implements OnInit {
  @Input() public darkModeBoolean: boolean;
  protected weatherCondition: string;
  constructor(private themeService: ThemesService) { }
  ngOnInit(): void {
    this.weatherCondition = this.themeService.getCondition();
  }

}
