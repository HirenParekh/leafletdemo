import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildthreeComponent } from './grand-childthree.component';

describe('GrandChildthreeComponent', () => {
  let component: GrandChildthreeComponent;
  let fixture: ComponentFixture<GrandChildthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
