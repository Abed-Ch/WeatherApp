import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetails2Component } from './weather-details2.component';

describe('WeatherDetails2Component', () => {
  let component: WeatherDetails2Component;
  let fixture: ComponentFixture<WeatherDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
