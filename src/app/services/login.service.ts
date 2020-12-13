import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }

  login(datos: any): Observable<any> {
    return this.api.post('5000/login', datos);
  }
  login2(emailx: string, passwordx:string): Observable<any> {
    let data=new Login();
    data.email=emailx;
    data.password =passwordx;
    return this.api.post('5000/login', data);
  }

  

  
}

