import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegresionLinealComponent } from './regresion-lineal/regresion-lineal.component';
import { EjemploComponent } from './componente/ejemplo/ejemplo.component';
import { Ejemplo2Component } from './componente/ejemplo2/ejemplo2.component';
import { SupportVectorMachineComponent } from './support-vector-machine/support-vector-machine.component';
import { RegresionLinealMultipleComponent } from './regresion-lineal-multiple/regresion-lineal-multiple.component';
import { BosqueAleatorioComponent } from './bosque-aleatorio/bosque-aleatorio.component';
import { ArbolesPotenciadosGradienteComponent } from './arboles-potenciados-gradiente/arboles-potenciados-gradiente.component';
import { ArbolesDecisionComponent } from './arboles-decision/arboles-decision.component';
import { AlgoritmoGeneticoComponent } from './algoritmo-genetico/algoritmo-genetico.component';
import { AllAlgoritmosComponent } from './all-algoritmos/all-algoritmos.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RegresionLinealComponent,
    EjemploComponent,
    Ejemplo2Component,
    SupportVectorMachineComponent,
    RegresionLinealMultipleComponent,
    BosqueAleatorioComponent,
    ArbolesPotenciadosGradienteComponent,
    ArbolesDecisionComponent,
    AlgoritmoGeneticoComponent,
    AllAlgoritmosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
