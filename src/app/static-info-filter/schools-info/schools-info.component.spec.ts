import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsInfoComponent } from './schools-info.component';

describe('SchoolsInfoComponent', () => {
  let component: SchoolsInfoComponent;
  let fixture: ComponentFixture<SchoolsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
