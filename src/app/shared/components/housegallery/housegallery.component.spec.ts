import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousegalleryComponent } from './housegallery.component';

describe('HousegalleryComponent', () => {
  let component: HousegalleryComponent;
  let fixture: ComponentFixture<HousegalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousegalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
