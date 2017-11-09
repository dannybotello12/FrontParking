import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { Registro } from '../../registro';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {

  constructor(private consultaService:ConsultaService) { }
  //Component properties
  registrobusqueda: Registro=null;
  statusCode: number;
  bandera:boolean;
  res: any;
  placa:string="";
  mensaje:string;
  boCode:boolean=false;

  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  ngOnInit() {
  }

  busqueda()
    {
       this.preProcessConfigurations();

      if ((this.placa.length>5))
      {

      this.consultaService.getRegistroByPlaca(this.placa)
        .subscribe(data => {
               this.registrobusqueda = data;
               console.log(this.registrobusqueda);
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

retirar()
{

 let fecha=new Date();
 let registro:Registro;

console.log(this.registrobusqueda.id)

 let registro2= new Registro(this.registrobusqueda.id,this.registrobusqueda.placa,this.registrobusqueda.fechaIngreso,fecha,"0",this.registrobusqueda.recargo,this.registrobusqueda.tipoVehiculo)



this.consultaService.updateArticle(registro2)
.subscribe(success => {
         this.statusCode = success.status;
         this.res =  success.json();
         this.mensaje=this.res.mensaje;


},

    errorCode => {
    this.statusCode = errorCode.status
    this.res =  errorCode.json();
    this.mensaje=this.res.mensaje;
   }

 )
}

}
