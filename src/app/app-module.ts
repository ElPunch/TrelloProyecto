import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
