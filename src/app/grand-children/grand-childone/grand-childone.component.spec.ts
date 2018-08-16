import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildoneComponent } from './grand-childone.component';

describe('GrandChildoneComponent', () => {
  let component: GrandChildoneComponent;
  let fixture: ComponentFixture<GrandChildoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
