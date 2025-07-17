import { ITarea } from "./itarea";
import { IProyecto } from "./iproyecto";

export interface ITablero {
  proyecto: IProyecto;
  categorias: {
    'To Do': ITarea[];
    'In Progress': ITarea[];
    'Hot Fix': ITarea[];
    'Done': ITarea[];
  };
  resumen: {
    total_tareas: number;
    por_categoria: {
      'To Do': number;
      'In Progress': number;
      'Hot Fix': number;
      'Done': number;
    };
    por_prioridad: {
      '1': number;
      '2': number;
      '3': number;
      '4': number;
      '5': number;
    };
  };
}