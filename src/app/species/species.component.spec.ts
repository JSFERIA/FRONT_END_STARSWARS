import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPECIESComponent } from './species.component';

describe('SPECIESComponent', () => {
  let component: SPECIESComponent;
  let fixture: ComponentFixture<SPECIESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPECIESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPECIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
