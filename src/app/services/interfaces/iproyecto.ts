import { ICategoria } from "./icategoria";

export interface IProyecto {
  id_proyecto: number;
  nombre: string;
  id_grupo: number;
  id_usuario_creador: number;
  fecha_creacion?: string;
}

export interface ICreateProyectoRequest {
  nombre: string;
}

export interface IProyectoResponse {
  mensaje: string;
  proyecto: IProyecto;
  categorias?: ICategoria[];
}

export interface IListProyectosResponse {
  proyectos: IProyecto[];
}