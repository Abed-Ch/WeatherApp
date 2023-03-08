import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobSVGComponent } from './blob-svg.component';

describe('BlobSVGComponent', () => {
  let component: BlobSVGComponent;
  let fixture: ComponentFixture<BlobSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlobSVGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlobSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
