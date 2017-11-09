import {TipoVehiculo} from './TipoVehiculo';

export class Registro {
   constructor(public id: string,
     public placa: string,
     public fechaIngreso: Date,
     public fechaSalida: Date,
     public valor:string,
     public recargo:boolean,
     public tipoVehiculo:TipoVehiculo) {
   }
}
