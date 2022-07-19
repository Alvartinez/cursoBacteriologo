import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineaModulo1Component } from './lineaModulo1/lineaModulo1.component';
import { ContainerHeadComponent } from './Container-head/Container-head.component';
import { DiccionarioComponent } from './diccionario/diccionario.component';
import { Block_SesionsComponent } from './block_Sesions/block_Sesions.component';

@NgModule({
  declarations: [				
    AppComponent,
      LineaModulo1Component,
      ContainerHeadComponent,
      DiccionarioComponent,
      Block_SesionsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
