import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enigme2Component } from './enigme2.component';

describe('Enigme2Component', () => {
  let component: Enigme2Component;
  let fixture: ComponentFixture<Enigme2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enigme2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enigme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
