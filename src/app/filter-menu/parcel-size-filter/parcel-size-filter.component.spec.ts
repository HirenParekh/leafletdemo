import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelSizeFilterComponent } from './parcel-size-filter.component';

describe('ParcelSizeFilterComponent', () => {
  let component: ParcelSizeFilterComponent;
  let fixture: ComponentFixture<ParcelSizeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelSizeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelSizeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
