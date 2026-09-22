import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer9 } from './exer9';

describe('Exer9', () => {
  let component: Exer9;
  let fixture: ComponentFixture<Exer9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer9],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
