import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DarkmodeService } from '../Darkmode.Service/darkmode.service';
import { colors, Hero, HeroObj, themeColors } from '../../Interfaces/Hero.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemesService implements OnDestroy {
  private weatherObject: Hero = HeroObj[Math.floor(Math.random() * 4)];
  private root = document.documentElement;
  private lightColors: colors = themeColors[this.weatherObject.Condition].light;
  private darkColors: colors = themeColors[this.weatherObject.Condition].dark;
  private titleSubject: Subject<string> = new Subject();
  private darkMode: boolean;
  private darkModeSub: Subscription;
  private weatherCondition: 'Sunny' | 'Rainy' | 'Cloudy' | 'Snowy';
  constructor(private darkModeService: DarkmodeService) {
    this.titleSubject.next(this.weatherObject.Title);
    this.darkModeSub = this.darkModeService.DarkMode$.subscribe(value => {
      this.darkMode = value;
      this.changeDetected();
    });
    this.weatherCondition = this.weatherObject.Condition;
    this.sendTitle();
  }

  changeDetected(): void {
    if (this.darkMode) {
      this.changeRoot(this.darkColors);
    } else {
      this.changeRoot(this.lightColors);
    }
    this.sendTitle();
  }

  sendTitle(): void {
    let interval: number = window.setInterval(() => {
      this.titleSubject.next(this.weatherObject.Title);
      if (this.darkMode && this.weatherObject.Condition === 'Sunny') {
        this.titleSubject.next("Moonstruck: A Night Sky Worth Staying Up For");
      }
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
    }, 200);
  }

  changeRoot(colors: colors): void {
    this.root.style.setProperty('--primary-bg', colors.primaryBackground);
    this.root.style.setProperty('--blob-bg', colors.blobBackground);
    this.root.style.setProperty('--title-color', colors.titleColor);
    this.root.style.setProperty('--text-color', colors.descriptionColor);
  }

  getLight(): colors {
    return this.lightColors;
  }

  getDark(): colors {
    return this.darkColors;
  }

  getTitle(): Subject<string> {
    return this.titleSubject;
  }

  getCondition(): 'Sunny' | 'Rainy' | 'Cloudy' | 'Snowy' {
    return this.weatherCondition;
  }
  ngOnDestroy(): void {
    this.darkModeSub.unsubscribe();
    this.titleSubject.complete();
  }
}

