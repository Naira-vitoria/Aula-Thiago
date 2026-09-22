import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer6 } from './exer6';

describe('Exer6', () => {
  let component: Exer6;
  let fixture: ComponentFixture<Exer6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer6],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
