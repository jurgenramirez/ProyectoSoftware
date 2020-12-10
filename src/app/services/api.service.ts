import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })

  export class ApiService {
    headers: HttpHeaders;

    constructor(private http: HttpClient) { }

    get(endpoint: string, reqOpts?:any) {    
      return this.http.get( endpoint, {
          params: reqOpts,
          headers: this.headers
      });
    }
  
    post(endpoint: string, body:any, reqOpts?:any)  {
        return this.http.post( endpoint, body, {
            params: reqOpts,
            headers: this.headers
        });
    }
  
    put(endpoint: string, body:any, reqOpts?:any) {
        return this.http.put( endpoint, body, {
            params: reqOpts,
            headers: this.headers
        });
    }
  
    delete(endpoint: string, reqOpts?:any) {
        return this.http.delete( endpoint, {
            params: reqOpts, 
            headers: this.headers
        });
    }
  
    async getHeaders() {
        //let token = await this.storage.getItem('token');
        let token = 'hola'
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
    }
  }
