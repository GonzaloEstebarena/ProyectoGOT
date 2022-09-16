import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactergalleryComponent } from './charactergallery.component';

describe('CharactergalleryComponent', () => {
  let component: CharactergalleryComponent;
  let fixture: ComponentFixture<CharactergalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactergalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactergalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
