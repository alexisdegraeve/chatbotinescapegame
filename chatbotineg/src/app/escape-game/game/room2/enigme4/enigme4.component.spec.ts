import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enigme4Component } from './enigme4.component';

describe('Enigme4Component', () => {
  let component: Enigme4Component;
  let fixture: ComponentFixture<Enigme4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enigme4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enigme4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
