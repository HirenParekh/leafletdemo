import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildtwoComponent } from './grand-childtwo.component';

describe('GrandChildtwoComponent', () => {
  let component: GrandChildtwoComponent;
  let fixture: ComponentFixture<GrandChildtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
