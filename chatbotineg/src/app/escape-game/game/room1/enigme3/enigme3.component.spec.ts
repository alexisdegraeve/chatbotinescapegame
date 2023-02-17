import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enigme3Component } from './enigme3.component';

describe('Enigme3Component', () => {
  let component: Enigme3Component;
  let fixture: ComponentFixture<Enigme3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enigme3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enigme3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
