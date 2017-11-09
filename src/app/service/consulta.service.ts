import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Registro } from '../registro';
import { TipoVehiculo } from '../TipoVehiculo';

@Injectable()
export class ConsultaService {

  //URLs for CRUD operations
   allArticlesUrl = "http://localhost:8080/user/consulta";
   articleUrl = "http://localhost:8080/user/registro";
   alltipovehiculosUrl="http://localhost:8080/user/tipovehiculos";
   //Create constructor to get Http instance
   constructor(private http:Http) {
   }
   //Fetch all articles
   getAllregistros(): Observable<Registro[]> {
       return this.http.get(this.allArticlesUrl)
       .map(this.extractData)
       .catch(this.handleError);

   }


   getAlltipoVehiculo(): Observable<TipoVehiculo[]> {
       return this.http.get(this.alltipovehiculosUrl)
       .map(this.extractData)
       .catch(this.handleError);

   }


  getRegistroByPlaca(placa: string): Observable<Registro> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('placa', placa);
let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
return this.http.get(this.articleUrl, options)
 .map(this.extractData)
 .catch(this.handleError);
  }



    createRegistro(registro: Registro):Observable<number> {
 let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.articleUrl, registro, options)
               .map(success => success.status)
               .catch(this.handleError);
    }


    updateArticle(registro: Registro):Observable<Response> {
 let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.articleUrl, registro, options)
               .map(success => success)
               .catch(this.handleError);
    }


   private extractData(res: Response) {
      let body = res.json();

        return body;
    }



    private handleError (error: Response | any) {
 console.error(error.message || error);
   error.text();
 return Observable.throw(error);
    }

}
