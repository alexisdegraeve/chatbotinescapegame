import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enigme5Component } from './enigme5.component';

describe('Enigme5Component', () => {
  let component: Enigme5Component;
  let fixture: ComponentFixture<Enigme5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enigme5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enigme5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
