import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionInfoComponent } from './pollution-info.component';

describe('PollutionInfoComponent', () => {
  let component: PollutionInfoComponent;
  let fixture: ComponentFixture<PollutionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollutionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
