import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHealthInfoComponent } from './daily-health-info.component';

describe('DailyHealthInfoComponent', () => {
  let component: DailyHealthInfoComponent;
  let fixture: ComponentFixture<DailyHealthInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyHealthInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHealthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
