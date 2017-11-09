import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { RetiroComponent } from './retiro.component';
import { Registro } from '../../registro';
import { TipoVehiculo } from '../../TipoVehiculo';
import { ConsultaService } from '../../service/consulta.service';
import { FormsModule } from '@angular/forms';
import {  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend } from '@angular/http';
  import { MockBackend } from '@angular/http/testing';



describe('RetiroComponent', () => {
  let component: RetiroComponent;
  let fixture: ComponentFixture<RetiroComponent>;
    let tioveh= new TipoVehiculo("1",null,null,null,null,null);
      let registro= new Registro("1","null",null,null,"0",true,tioveh);
  let busquedaservicio={


    getRegistroByPlaca(placa:string)
    {
    return Observable.of( {  id: "1" ,
       placa:'mxz21c' ,
       fechaIngreso: '5165'  ,
       fechaSalida: '5464' ,
       valor: '0',
       recargo: true,
       tipoVehiculo:tioveh });
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ FormsModule, HttpModule ],
      declarations: [ RetiroComponent ],
      providers: [
        {provide:ConsultaService,useValue:busquedaservicio}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

  });


});
