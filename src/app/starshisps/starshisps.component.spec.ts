import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STARSHISPSComponent } from './starshisps.component';

describe('STARSHISPSComponent', () => {
  let component: STARSHISPSComponent;
  let fixture: ComponentFixture<STARSHISPSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STARSHISPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STARSHISPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
