import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import {APP_ROUTING} from './app.routes';
import { BusquedaTodosComponent } from './components/busqueda-todos/busqueda-todos.component';
import { ConsultaService } from './service/consulta.service';
import { BusquedaPorPlacaComponent } from './components/busqueda-por-placa/busqueda-por-placa.component';
import { PruebaunitariaComponent } from './components/pruebaunitaria/pruebaunitaria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    IngresoComponent,
    RetiroComponent,
    BusquedaTodosComponent,
    BusquedaPorPlacaComponent,
    PruebaunitariaComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,APP_ROUTING,ReactiveFormsModule
  ],
  providers: [ConsultaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
