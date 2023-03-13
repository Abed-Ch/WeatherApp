import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHourlyComponent } from './dash-hourly.component';

describe('DashHourlyComponent', () => {
  let component: DashHourlyComponent;
  let fixture: ComponentFixture<DashHourlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashHourlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
