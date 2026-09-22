import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer5 } from './exer5';

describe('Exer5', () => {
  let component: Exer5;
  let fixture: ComponentFixture<Exer5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer5],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
