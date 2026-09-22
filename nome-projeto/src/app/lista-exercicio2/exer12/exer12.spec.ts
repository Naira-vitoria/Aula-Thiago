import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer12 } from './exer12';

describe('Exer12', () => {
  let component: Exer12;
  let fixture: ComponentFixture<Exer12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer12],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
