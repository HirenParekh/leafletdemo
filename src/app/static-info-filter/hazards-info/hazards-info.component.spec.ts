import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardsInfoComponent } from './hazards-info.component';

describe('HazardsInfoComponent', () => {
  let component: HazardsInfoComponent;
  let fixture: ComponentFixture<HazardsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
