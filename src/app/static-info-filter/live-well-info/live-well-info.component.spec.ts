import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWellInfoComponent } from './live-well-info.component';

describe('LiveWellInfoComponent', () => {
  let component: LiveWellInfoComponent;
  let fixture: ComponentFixture<LiveWellInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveWellInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveWellInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
