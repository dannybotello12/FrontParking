import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { Registro } from '../../registro';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-busqueda-todos',
  templateUrl: './busqueda-todos.component.html',

})
export class BusquedaTodosComponent implements OnInit {

Allregistros: Registro[];
statusCode: number;
bandera:boolean;

requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;



  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
      this.getAllregistros();
  }

  getAllregistros() {
     this.consultaService.getAllregistros()
  .subscribe(
             data => this.Allregistros = data,
               errorCode =>  this.statusCode = errorCode


           );



       }

}
