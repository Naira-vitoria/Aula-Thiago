import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeDoComponente } from './nome-do-componente';

describe('NomeDoComponente', () => {
  let component: NomeDoComponente;
  let fixture: ComponentFixture<NomeDoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NomeDoComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(NomeDoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
