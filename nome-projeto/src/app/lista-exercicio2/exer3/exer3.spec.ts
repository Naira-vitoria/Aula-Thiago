import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer3 } from './exer3';

describe('Exer3', () => {
  let component: Exer3;
  let fixture: ComponentFixture<Exer3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer3],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
