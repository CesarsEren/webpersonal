import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from './template/footer/footer.component';
import { AmazonComponent } from './pages/amazon/amazon.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    AmazonComponent,
    QuiensoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
