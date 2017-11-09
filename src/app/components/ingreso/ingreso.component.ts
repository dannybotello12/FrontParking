import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { Registro } from '../../registro';
import { TipoVehiculo } from '../../TipoVehiculo';
import { FormControl, FormGroup, Validators,ReactiveFormsModule,NgForm  } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styles: [`.ng-invalid.ng-touched:not(form) {border:1px solid red;}`]
})
export class IngresoComponent implements OnInit {

   Alltipovehiculo: TipoVehiculo[];
   res: any
   mensaje:string
   statusCode: Number;
   bandera:boolean;

 boCode:boolean=false;

   requestProcessing = false;
   articleIdToUpdate = null;
   processValidation = false;



  constructor(private consultaService:ConsultaService) { }

  ngOnInit() {
    this.getAllregistros();
  }


  getAllregistros() {
     this.consultaService.getAlltipoVehiculo()
  .subscribe(
             data => this.Alltipovehiculo = data

           );
       }
registrar(forma:NgForm)
 {
   console.log(forma)

    console.log(forma.value.placa)

if (forma.valid)
{
this.preProcessConfigurations();
      let placa = forma.value.placa.trim();
      let recargo = forma.value.recargo;
      let tioveh= new TipoVehiculo(forma.value.tipovehiculo,null,null,null,null,null);

     let fecha=new Date();
     let registro= new Registro(
     null,
     placa,
     fecha,
     null,
     "0",
     recargo,
     tioveh)


 this.consultaService.createRegistro(registro)
   .subscribe(success => {
             this.statusCode = success;

            forma.reset();

 },

        errorCode => {
        this.statusCode = errorCode.status
        this.res =  errorCode.json();
        this.mensaje=this.res.mensaje;
       }

     )

}

  }

  preProcessConfigurations() {
       this.statusCode = null;
 this.requestProcessing = true;

}
}
