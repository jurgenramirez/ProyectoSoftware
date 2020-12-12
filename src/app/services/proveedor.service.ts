import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private api: ApiService) { }

  getProductbyProveedor(datos: any): Observable<any> {
    return this.api.post(`http://34.72.4.108:5001/productos?idProveedor/`, datos);
  }

  

  
}
