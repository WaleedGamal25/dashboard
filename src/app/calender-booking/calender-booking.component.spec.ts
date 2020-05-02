import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderBookingComponent } from './calender-booking.component';

describe('CalenderBookingComponent', () => {
  let component: CalenderBookingComponent;
  let fixture: ComponentFixture<CalenderBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
