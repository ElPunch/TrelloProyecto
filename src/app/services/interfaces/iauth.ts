import { IUsuario } from "./iusuario";
export interface IRegistroRequest {
  nombre: string;
  email: string;
  contrasena: string;
}

export interface ILoginRequest {
  email: string;
  contrasena: string;
}

export interface ILoginResponse {
  mensaje: string;
  token: string;
  usuario: IUsuario;
}

export interface IRegistroResponse {
  mensaje: string;
  usuario: IUsuario;
}

export interface IPerfilResponse {
  usuario: IUsuario;
}

export interface IUpdatePerfilRequest {
  nombre?: string;
  email?: string;
}

export interface IChangePasswordRequest {
  contrasena_actual: string;
  contrasena_nueva: string;
}

export interface IApiResponse<T = any> {
  mensaje?: string;
  error?: string;
  data?: T;
}