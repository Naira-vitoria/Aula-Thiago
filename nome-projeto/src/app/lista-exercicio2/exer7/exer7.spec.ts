import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer7 } from './exer7';

describe('Exer7', () => {
  let component: Exer7;
  let fixture: ComponentFixture<Exer7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer7],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
