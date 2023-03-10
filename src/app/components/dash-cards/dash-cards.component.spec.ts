import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCardsComponent } from './dash-cards.component';

describe('DashCardsComponent', () => {
  let component: DashCardsComponent;
  let fixture: ComponentFixture<DashCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
