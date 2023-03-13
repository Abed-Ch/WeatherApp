import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DarkmodeService } from 'src/app/services/Darkmode.Service/darkmode.service';
import { Subscription } from 'rxjs';
import { ThemesService } from 'src/app/services/Themes.Service/themes.service';
import { LocationsService } from 'src/app/services/Locations.Service/locations.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationInterface } from 'src/app/Interfaces/Location.interface';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('locationInput') locationInput: ElementRef;
  protected title: string;
  protected darkMode: boolean;
  private darkModeSub: Subscription;
  private titleSub: Subscription;
  protected loadingLocation: boolean = false;
  protected prefix: string;
  protected results: LocationInterface[] | undefined = [];
  protected hasNext: boolean;
  constructor(
    private DMservice: DarkmodeService,
    private themeService: ThemesService,
    private LocatioService: LocationsService,
    private modalService: NgbModal
  ) {}

  open(content: any) {
    this.modalService.open(content, { backdrop: true, scrollable: true });
  }

  async searchLocation(content: any) {
    this.loadingLocation = true;
    this.prefix = this.locationInput.nativeElement.value;
    if (this.prefix === '') {
      this.locationInput.nativeElement.classList.add('is-invalid');
      this.loadingLocation = false;
      return;
    }
    this.locationInput.nativeElement.classList.remove('is-valid');
    try {
      const results = await this.LocatioService.getCityNames(
        this.prefix
      ).toPromise();
      if (Array.isArray(this.results) && this.results.length > 0) {
        let array = this.results.concat(Array.isArray(results) ? results : []);
        this.results = array;
      } else {
        this.results = Array.isArray(results) ? results : [];
        this.open(content);
      }
      this.hasNext = this.LocatioService.getNext();
    } catch (error) {
      console.error(error);
    } finally {
      this.loadingLocation = false;
    }
  }

  closedModal() {
    this.results = [];
    this.LocatioService.reset();
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
    this.titleSub = this.themeService
      .getTitle()
      .subscribe((val) => (this.title = val));
    this.darkModeSub = this.DMservice.DarkMode$.subscribe((val) => {
      this.darkMode = val;
    });
  }

  ngOnDestroy(): void {
    this.darkModeSub.unsubscribe();
    this.titleSub.unsubscribe();
    this.closedModal();
    this.loadingLocation = false;
  }

  autoLocate() {
    this.loadingLocation = true;
    this.LocatioService.autoLocate();
  }
  locationClicked(e: MouseEvent) {
    if (this.results) {
      let id: number = parseInt((<HTMLAnchorElement>e.target).id);
      let city: LocationInterface[] = this.results.filter(
        (city) => city.id === id
      );
      this.LocatioService.setChosenLocation(city[0]);
      this.closedModal();
      this.loadingLocation = false;
    }
  }
}
