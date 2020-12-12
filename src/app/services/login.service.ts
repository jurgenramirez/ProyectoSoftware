import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }

  login(datos: any): Observable<any> {
    return this.api.post('5000/login', datos);
  }

  

  
}

