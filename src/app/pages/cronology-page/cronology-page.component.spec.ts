import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronologyPageComponent } from './cronology-page.component';

describe('CronologyPageComponent', () => {
  let component: CronologyPageComponent;
  let fixture: ComponentFixture<CronologyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronologyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronologyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
