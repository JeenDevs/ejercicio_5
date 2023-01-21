import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoritmoGeneticoComponent } from './algoritmo-genetico/algoritmo-genetico.component';
import { AllAlgoritmosComponent } from './all-algoritmos/all-algoritmos.component';
import { AppComponent } from './app.component';
import { ArbolesDecisionComponent } from './arboles-decision/arboles-decision.component';
import { ArbolesPotenciadosGradienteComponent } from './arboles-potenciados-gradiente/arboles-potenciados-gradiente.component';
import { BosqueAleatorioComponent } from './bosque-aleatorio/bosque-aleatorio.component';
import { EjemploComponent } from './componente/ejemplo/ejemplo.component';
import { Ejemplo2Component } from './componente/ejemplo2/ejemplo2.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegresionLinealMultipleComponent } from './regresion-lineal-multiple/regresion-lineal-multiple.component';
import { RegresionLinealComponent } from './regresion-lineal/regresion-lineal.component';
import { SupportVectorMachineComponent } from './support-vector-machine/support-vector-machine.component';
// const routes: Routes = [];
const routes: Routes = [
  { path:'',component:InicioComponent},
  { path:'componente/ejemplo',component:EjemploComponent},
  { path:'regresion-lineal',component:RegresionLinealComponent },
  { path:'regresion-lineal-multiple',component:RegresionLinealMultipleComponent },
  { path:'support-vector-machine',component:SupportVectorMachineComponent },
  { path:'bosque-aleatorio',component:BosqueAleatorioComponent },
  { path:'arboles-potenciados-gradiente',component:ArbolesPotenciadosGradienteComponent },
  { path:'arboles-decision',component:ArbolesDecisionComponent },
  { path:'algoritmo-genetico',component:AlgoritmoGeneticoComponent },
  { path:'all-algoritmos',component:AllAlgoritmosComponent },

  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


