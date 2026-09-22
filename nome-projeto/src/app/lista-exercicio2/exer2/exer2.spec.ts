import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer2 } from './exer2';

describe('Exer2', () => {
  let component: Exer2;
  let fixture: ComponentFixture<Exer2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer2],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
