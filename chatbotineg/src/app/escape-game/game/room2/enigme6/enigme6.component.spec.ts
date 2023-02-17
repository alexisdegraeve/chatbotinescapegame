import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enigme6Component } from './enigme6.component';

describe('Enigme6Component', () => {
  let component: Enigme6Component;
  let fixture: ComponentFixture<Enigme6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enigme6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enigme6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
