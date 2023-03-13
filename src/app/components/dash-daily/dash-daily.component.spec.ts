import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDailyComponent } from './dash-daily.component';

describe('DashDailyComponent', () => {
  let component: DashDailyComponent;
  let fixture: ComponentFixture<DashDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
