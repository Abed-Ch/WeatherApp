import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkmodeService } from 'src/app/services/Darkmode.Service/darkmode.service';
import { ThemesService } from 'src/app/services/Themes.Service/themes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private darkModeService: DarkmodeService,
    private themeService: ThemesService) { }
  darkMode: boolean;
  darkModeSubsrcibtion: Subscription;
  protected darkModeTimeOut: boolean = false;
  private weatherCondition: string;
  ngOnInit(): void {
    this.darkModeSubsrcibtion = this.darkModeService.getDarkMode().subscribe(val => this.darkMode = val);
    this.weatherCondition = this.themeService.getCondition();
  }
  ngOnDestroy(): void {
    this.darkModeSubsrcibtion.unsubscribe();
  }
  toggleDark(): void {
    this.darkModeService.toggleDarkMode();
    if (this.weatherCondition === "Sunny") {
      this.darkModeTimeOut = true;
      setTimeout(() => {
        this.darkModeTimeOut = false;
      }, 5000);
    }
  }
}
