import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathsFilterComponent } from './baths-filter.component';

describe('BathsFilterComponent', () => {
  let component: BathsFilterComponent;
  let fixture: ComponentFixture<BathsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
