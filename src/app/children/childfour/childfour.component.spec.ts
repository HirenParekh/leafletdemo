import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildfourComponent } from './childfour.component';

describe('ChildfourComponent', () => {
  let component: ChildfourComponent;
  let fixture: ComponentFixture<ChildfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
