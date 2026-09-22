import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer10 } from './exer10';

describe('Exer10', () => {
  let component: Exer10;
  let fixture: ComponentFixture<Exer10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer10],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
