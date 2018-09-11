import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticInfoFilterComponent } from './static-info-filter.component';

describe('StaticInfoFilterComponent', () => {
  let component: StaticInfoFilterComponent;
  let fixture: ComponentFixture<StaticInfoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticInfoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticInfoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
