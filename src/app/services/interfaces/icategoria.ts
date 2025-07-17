export interface ICategoria {
  id_categoria: number;
  nombre: string;
  id_proyecto: number;
}

export interface ICreateCategoriaRequest {
  nombre: string;
  proyecto_id: number;
}

export interface ICategoriaResponse {
  mensaje: string;
  categoria: ICategoria;
}

export interface IListCategoriasResponse {
  categorias: ICategoria[];
}