import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AmazonComponent } from './pages/amazon/amazon.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
