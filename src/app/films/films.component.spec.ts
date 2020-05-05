import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FILMSComponent } from './films.component';

describe('FILMSComponent', () => {
  let component: FILMSComponent;
  let fixture: ComponentFixture<FILMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FILMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FILMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
