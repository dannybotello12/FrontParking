import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { Registro } from '../../registro';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-busqueda-por-placa',
  templateUrl: './busqueda-por-placa.component.html',

})
export class BusquedaPorPlacaComponent implements OnInit {

  //Component properties
  registro: Registro=null;
  statusCode: number;
  bandera:boolean;

  placa:string="";
boCode:boolean=false;

  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;


  constructor(private consultaService:ConsultaService) { }

  ngOnInit() {
  }

  busqueda()
    {
       this.preProcessConfigurations();

      if ((this.placa.length>5))
      {

      this.consultaService.getRegistroByPlaca(this.placa)
        .subscribe(data => {
               this.registro = data;
               console.log(this.registro);
               this.processValidation = true;
        this.requestProcessing = false;
        this.boCode= true;

    },
    errorCode =>  this.statusCode = errorCode);
      }

      else{

      }
    }


    preProcessConfigurations() {
           this.statusCode = null;
     this.requestProcessing = true;
       this.boCode= false;
    }


}
