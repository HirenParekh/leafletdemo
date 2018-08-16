import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildfourComponent } from './grand-childfour.component';

describe('GrandChildfourComponent', () => {
  let component: GrandChildfourComponent;
  let fixture: ComponentFixture<GrandChildfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
