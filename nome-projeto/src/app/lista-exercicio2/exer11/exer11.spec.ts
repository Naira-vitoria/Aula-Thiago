import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer11 } from './exer11';

describe('Exer11', () => {
  let component: Exer11;
  let fixture: ComponentFixture<Exer11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer11],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
