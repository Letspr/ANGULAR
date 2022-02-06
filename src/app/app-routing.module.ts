import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { PiedraptComponent } from './components/piedrapt/piedrapt.component';

//AQUÍ ES DONDE TENGO QUE ESTABLECER
//LA CORRESPONDECIA ENTRE RUTAS Y COMPONENTE
const routes: Routes = [
  {path:"dni", component: DniComponent},
  //{path:"", component: DniComponent},
  {path:"imc", component: ImcComponent},
  {path:"", component: PiedraptComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
