import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordabilityInfoComponent } from './affordability-info.component';

describe('AffordabilityInfoComponent', () => {
  let component: AffordabilityInfoComponent;
  let fixture: ComponentFixture<AffordabilityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffordabilityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffordabilityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
