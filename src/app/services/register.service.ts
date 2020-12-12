import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private api: ApiService) { }

  registerclient(datos: any): Observable<any> {
    return this.api.post('5000/registrarCliente', datos);
  }
  registerProveedor(datos: any): Observable<any> {
    return this.api.post('5000/registrarProveedor', datos);
  }
}
