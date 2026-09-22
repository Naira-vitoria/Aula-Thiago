import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer1 } from './exer1';

describe('Exer1', () => {
  let component: Exer1;
  let fixture: ComponentFixture<Exer1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer1],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
