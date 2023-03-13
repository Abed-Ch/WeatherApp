import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetails1Component } from './weather-details1.component';

describe('WeatherDetails1Component', () => {
  let component: WeatherDetails1Component;
  let fixture: ComponentFixture<WeatherDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
