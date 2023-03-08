import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription, takeUntil, Subject } from 'rxjs';
import { DarkmodeService } from 'src/app/services/Darkmode.Service/darkmode.service';

@Directive({
  selector: '[appRainy]'
})
export class RainyDirective implements OnInit, OnDestroy {
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
      fetch('../../../../assets/Raincloud1.svg'),
      fetch('../../../../assets/Raincloud2.svg'),
      fetch('../../../../assets/Raincloud3.svg'),
      fetch('../../../../assets/Raincloud4.svg')
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
      : '#E3E3E3';
    this.renderer.setStyle(this.element.nativeElement, 'background', gradient);
  }

  private displayCloud(): void {
    for (let i = 0; i < this.Clouds.length; i++) {
      const div: HTMLDivElement = this.renderer.createElement('div');
      div.innerHTML = this.Clouds[i];
      this.renderer.addClass(div, 'rainyClouds');
      div.style.setProperty('--i', i.toString());
      div.style.animationDelay = i === 0 ? '0s' : i === 1 ? '2s' : i === 2 ? '5s' : '8s';
      div.style.setProperty('--gray', i === 0 ? '#ffffff' : i === 1 ? '#efefef' : i === 2 ? '#cfcfcf' : '#bfbfbf');
      div.style.animationDuration = i === 0 ? '20s' : i === 1 ? '25s' : i === 2 ? '35s' : '40s';;
      this.renderer.appendChild(this.element.nativeElement, div);
    }
    this.makeRain();
  }
  private makeRain(): void {
    const div: HTMLDivElement = this.renderer.createElement('div');
    this.renderer.addClass(div, 'Rain')
    this.renderer.appendChild(this.element.nativeElement, div)
    var raindrop: HTMLDivElement;
    for (let i = 0; i < 100; i++) {
      raindrop = this.renderer.createElement('span');
      this.renderer.addClass(raindrop, 'Raindrops')
      raindrop.style.setProperty('--i', i.toString())
      raindrop.style.animationDuration = (Math.random() * 5) + 's'
      this.renderer.appendChild(div, raindrop)
    }
  }


  private unsubscribe$ = new Subject<void>();
}
