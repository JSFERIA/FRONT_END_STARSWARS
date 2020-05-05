import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PEOPLEComponent } from './people.component';

describe('PEOPLEComponent', () => {
  let component: PEOPLEComponent;
  let fixture: ComponentFixture<PEOPLEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PEOPLEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PEOPLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
