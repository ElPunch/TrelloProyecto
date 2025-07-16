import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProyectos } from './listar-proyectos';

describe('ListarProyectos', () => {
  let component: ListarProyectos;
  let fixture: ComponentFixture<ListarProyectos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarProyectos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProyectos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
