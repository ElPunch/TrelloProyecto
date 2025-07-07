import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Proyectos } from './Paginas/proyectos/proyectos';
import { Tablero } from './Paginas/tablero/tablero';
import { Login } from './Paginas/login/login';
import { Layout } from './Paginas/layout/layout';

@NgModule({
  declarations: [
    App,
    Proyectos,
    Tablero,
    Login,
    Layout
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
