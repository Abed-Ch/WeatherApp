import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DarkmodeService implements OnDestroy {
  private isDarkMode: boolean = false;
  public DarkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isDarkMode);
  constructor() {
    let storageData: string | null = localStorage.getItem("isDarkMode");
    if (storageData === "true") {
      this.isDarkMode = true;
      this.DarkMode$.next(true);
    }
  }
  getDarkMode(): BehaviorSubject<boolean> {
    return this.DarkMode$;
  }
  public toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("isDarkMode", String(this.isDarkMode));
    this.DarkMode$.next(this.isDarkMode);
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
  ngOnDestroy(): void {
    this.DarkMode$.complete();
  }
}
