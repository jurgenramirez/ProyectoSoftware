import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private api: ApiService) { }

  registerclient(datos: any): Observable<any> {
    return this.api.post('https://eiur26wdr2.execute-api.us-east-2.amazonaws.com/prod/clients', datos);
  }
}
