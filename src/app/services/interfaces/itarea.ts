export interface ITarea {
  id_tarea: number;
  titulo: string;
  descripcion?: string;
  prioridad: number;
  fecha_creacion?: string;
  fecha_vencimiento?: string;
  categoria: string;
  estatus: string;
  id_proyecto?: number;
  id_categoria?: number;
  id_estatus?: number;
}

export interface ICreateTareaRequest {
  titulo: string;
  descripcion?: string;
  id_proyecto: number;
  nombre_categoria: string;
  nombre_estatus: string;
  prioridad?: number;
  fecha_vencimiento?: string;
}

export interface IUpdateTareaRequest {
  titulo?: string;
  descripcion?: string;
  prioridad?: number;
  fecha_vencimiento?: string;
  nombre_estatus?: string;
  nombre_categoria?: string;
}

export interface ITareaResponse {
  mensaje: string;
  tarea: ITarea;
}

export interface IListTareasResponse {
  tareas: ITarea[];
}