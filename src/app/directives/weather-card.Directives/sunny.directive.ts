import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DarkmodeService } from '../../services/Darkmode.Service/darkmode.service';

@Directive({
  selector: '[appSunny]',
})
export class SunnyDirective implements OnInit, OnDestroy {
  private darkModeSub: Subscription;
  private Clouds: string[] = [];

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private darkModeService: DarkmodeService
  ) { }

  ngOnInit(): void {
    this.darkModeSub = this.darkModeService
      .getDarkMode()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((darkMode: boolean) => {
        this.toggleBackground(darkMode);
        this.displayCelestial(darkMode);
      });

    this.getClouds();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    if (this.darkModeSub) {
      this.darkModeSub.unsubscribe();
    }
  }

  private getClouds(): void {
    Promise.all([
      fetch('../../../../assets/Raincloud3.svg'),
      fetch('../../../../assets/Raincloud8.svg')
    ])
      .then((responses) => Promise.all(responses.map((res) => res.text())))
      .then((texts) => {
        this.Clouds = texts;
        this.displayCloud();
      });
  }

  private toggleBackground(darkMode: boolean): void {
    const gradient = darkMode
      ? 'linear-gradient(to bottom, #322C47, #272727)'
      : 'linear-gradient(235deg, #9FD1C8, #55D4D4)';
    this.renderer.setStyle(this.element.nativeElement, 'background', gradient);
  }

  private displayCloud(): void {
    for (let i = 0; i < this.Clouds.length; i++) {
      const div: HTMLDivElement = this.renderer.createElement('div');
      div.innerHTML = this.Clouds[i];
      this.renderer.addClass(div, 'sunnyClouds');
      div.style.setProperty('--i', i.toString());
      div.style.animationDelay = i === 0 || i === 4 ? '0s' : `${Math.round(Math.random() * 10)}s`;
      div.style.animationDuration = `${Math.ceil(Math.random() * 10) + 15}s`;
      this.renderer.appendChild(this.element.nativeElement, div);
    }
  }

  private displayCelestial(darkMode: boolean): void {
    const className = darkMode ? 'moon' : 'sun';
    if (this.celestialDiv) {
      this.renderer.addClass(this.celestialDiv, 'celestialExit');
      setTimeout(() => {
        this.celestialDiv.outerHTML = '';
        this.createCelestial(className);
      }, 1500);
    } else {
      this.createCelestial(className);
    }
  }

  private createCelestial(className: string): void {
    this.celestialDiv = this.renderer.createElement('div');
    this.renderer.addClass(this.celestialDiv, 'celestialEnter');
    this.renderer.addClass(this.celestialDiv, className);
    this.renderer.appendChild(this.element.nativeElement, this.celestialDiv);
  }

  private unsubscribe$ = new Subject<void>();
  private celestialDiv: HTMLDivElement;
}
