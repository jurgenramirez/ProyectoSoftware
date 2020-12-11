import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }

  login(datos: any): Observable<any> {
    return this.api.post('https://eiur26wdr2.execute-api.us-east-2.amazonaws.com/prod/login', datos);
  }
}

