export interface IUsuario {
  id_usuario: number;
  nombre: string;
  email: string;
  es_admin: boolean;
  fecha_registro?: string;
  id_grupo: number;
  id_usuario_creador: number;
}