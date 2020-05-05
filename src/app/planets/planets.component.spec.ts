import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLANETSComponent } from './planets.component';

describe('PLANETSComponent', () => {
  let component: PLANETSComponent;
  let fixture: ComponentFixture<PLANETSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLANETSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLANETSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
