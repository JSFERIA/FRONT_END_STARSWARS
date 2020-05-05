import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VEHICLESComponent } from './vehicles.component';

describe('VEHICLESComponent', () => {
  let component: VEHICLESComponent;
  let fixture: ComponentFixture<VEHICLESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VEHICLESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VEHICLESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
