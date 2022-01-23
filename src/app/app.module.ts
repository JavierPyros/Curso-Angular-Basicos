import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [ //Componentes.
    AppComponent,
  ],
  imports: [ //Otros modulos.
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], //Servicios especificos.
  bootstrap: [AppComponent] //Componente principal al iniciar. No se colocará mas de 1 vez.
})
export class AppModule { }
