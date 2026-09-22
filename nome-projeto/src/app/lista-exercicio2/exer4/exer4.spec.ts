import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer4 } from './exer4';

describe('Exer4', () => {
  let component: Exer4;
  let fixture: ComponentFixture<Exer4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer4],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
