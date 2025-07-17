import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/usuario/dashboard/dashboard';
import { CrearProyecto } from './general/crear-proyecto/crear-proyecto';
import { ListarProyectos } from './general/listar-proyectos/listar-proyectos';
import { CrearTarea } from './general/crear-tarea/crear-tarea';
import { ListarTareas } from './general/listar-tareas/listar-tareas';
import { InputText } from './shared/components/input-text/input-text';
import { BotonSubmit } from './shared/components/boton-submit/boton-submit';
import { CardTarea } from './shared/components/card-tarea/card-tarea';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Dashboard,
    CrearProyecto,
    ListarProyectos,
    CrearTarea,
    ListarTareas,
    InputText,
    BotonSubmit,
    CardTarea
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
