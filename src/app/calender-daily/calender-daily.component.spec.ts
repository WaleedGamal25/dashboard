import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDailyComponent } from './calender-daily.component';

describe('CalenderDailyComponent', () => {
  let component: CalenderDailyComponent;
  let fixture: ComponentFixture<CalenderDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
