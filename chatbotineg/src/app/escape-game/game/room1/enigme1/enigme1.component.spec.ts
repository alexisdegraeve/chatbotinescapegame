import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enigme1Component } from './enigme1.component';

describe('Enigme1Component', () => {
  let component: Enigme1Component;
  let fixture: ComponentFixture<Enigme1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enigme1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enigme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
