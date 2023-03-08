import { Directive, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { DarkmodeService } from 'src/app/services/Darkmode.Service/darkmode.service';
@Directive({
  selector: '[appCloudy]'
})
export class CloudyDirective implements OnInit, OnDestroy {
  private Clouds: string[] = [];
  private darkMode: boolean;
  private darkModeSub: Subscription;
  constructor(private element: ElementRef,
    private renderer: Renderer2,
    private darkModeService: DarkmodeService) { }

  ngOnInit(): void {
    this.darkModeSub = this.darkModeService.getDarkMode().subscribe(val => {
      this.darkMode = val;
      this.toggleBackground()
    })
    this.getClouds().then(() => {
      this.displayCloud();
    });
  }

  toggleBackground() {
    if (this.darkMode) {
      this.renderer.setStyle(this.element.nativeElement, 'background', '#3A3A3A')
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'background', 'linear-gradient(235deg, #9FD1C8, #55D4D4)')
    }
  }

  getClouds(): Promise<void> {
    const promises = [
      fetch('../../../../assets/Raincloud1.svg').then((res) => res.text()),
      fetch('../../../../assets/Raincloud2.svg').then((res) => res.text()),
      fetch('../../../../assets/Raincloud3.svg').then((res) => res.text()),
      fetch('../../../../assets/Raincloud4.svg').then((res) => res.text()),
      fetch('../../../../assets/Raincloud6.svg').then((res) => res.text()),
      fetch('../../../../assets/Raincloud7.svg').then((res) => res.text()),
      fetch('../../../../assets/Raincloud8.svg').then((res) => res.text()),
    ];

    return Promise.all(promises).then((results) => {
      this.Clouds = results;
    });
  }

  displayCloud(): void {
    for (let i = 0; i < this.Clouds.length; i++) {
      const div: HTMLDivElement = this.renderer.createElement('div');
      div.innerHTML = this.Clouds[i];
      this.renderer.addClass(div, 'cloudyClouds');
      div.style.setProperty('--i', i.toString());
      div.style.setProperty('--fill', this.getRandomCloudColor());
      div.style.animationDelay = i === 0 || i === 4 ? '0s' : `${Math.round(Math.random() * 10)}s`
      div.style.animationDuration = `${Math.ceil(Math.random() * 10) + 15}s`
      this.renderer.appendChild(this.element.nativeElement, div);
    }
  }
  getRandomCloudColor() {
    let random = 230 + Math.round(Math.random() * 25);
    return `rgba(${random},${random},${random},1)`
  }
  ngOnDestroy(): void {
    this.darkModeSub.unsubscribe();
  }
}
import { Subscription } from 'rxjs';






