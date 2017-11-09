import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { Registro } from '../../registro';

@Component({
  selector: 'app-pruebaunitaria',
  templateUrl: './pruebaunitaria.component.html',
  styleUrls: ['./pruebaunitaria.component.css']
})
export class PruebaunitariaComponent implements OnInit {

  constructor(private consultaService:ConsultaService) { }

  ngOnInit() {
  }

  busqueda()
  {
    this.consultaService.getRegistroByPlaca("mxz21c")
    .subscribe(data => {
           this.registro = data;
           console.log(this.registro);
  })

}
}
