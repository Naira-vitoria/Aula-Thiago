import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaEmCurso } from './matricula-em-curso';

describe('MatriculaEmCurso', () => {
  let component: MatriculaEmCurso;
  let fixture: ComponentFixture<MatriculaEmCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatriculaEmCurso],
    }).compileComponents();

    fixture = TestBed.createComponent(MatriculaEmCurso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
