import { TestBed } from '@angular/core/testing';

import { DarkmodeService } from './darkmode.service';

describe('DarkmodeService', () => {
  let service: DarkmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return false', () => {
    var result;
    let darkModeSubscribtion = service.getDarkMode().subscribe(val => result = val);
    darkModeSubscribtion.unsubscribe();
    expect(result).toBeFalse();
  });
  it('should toggle DarkMode'), () => {
    var result;
    let darkModeSubscribtion = service.getDarkMode().subscribe(val => result = val);
    service.toggleDarkMode();
    darkModeSubscribtion.unsubscribe()
    expect(result).toBeTrue()
  }
});
