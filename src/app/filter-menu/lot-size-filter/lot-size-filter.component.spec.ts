import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotSizeFilterComponent } from './lot-size-filter.component';

describe('LotSizeFilterComponent', () => {
  let component: LotSizeFilterComponent;
  let fixture: ComponentFixture<LotSizeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotSizeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotSizeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
