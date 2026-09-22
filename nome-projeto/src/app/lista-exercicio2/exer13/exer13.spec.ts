import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer13 } from './exer13';

describe('Exer13', () => {
  let component: Exer13;
  let fixture: ComponentFixture<Exer13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer13],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
