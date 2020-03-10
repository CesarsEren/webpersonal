import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AmazonComponent } from './pages/amazon/amazon.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';


const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"amazon",
    component:AmazonComponent
  },
  {
    path:'quiensoy',
    component:QuiensoyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
