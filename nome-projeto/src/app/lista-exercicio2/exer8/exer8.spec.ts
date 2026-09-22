import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer8 } from './exer8';

describe('Exer8', () => {
  let component: Exer8;
  let fixture: ComponentFixture<Exer8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer8],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
