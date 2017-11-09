import { RouterModule, Routes } from '@angular/router';
import {IngresoComponent} from './components/ingreso/ingreso.component';
import {RetiroComponent} from './components/retiro/retiro.component';
import {BusquedaTodosComponent} from './components/busqueda-todos/busqueda-todos.component';
import {BusquedaPorPlacaComponent} from './components/busqueda-por-placa/busqueda-por-placa.component';
const APP_ROUTES: Routes = [
  { path: 'ingreso', component: IngresoComponent },
  { path: 'retiro', component: RetiroComponent },
  { path: 'busqueda-todos', component: BusquedaTodosComponent },
    { path: 'busqueda-por-placa', component: BusquedaPorPlacaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'ingreso' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
