import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class ApiTiendasService {
    headers: HttpHeaders;
    url: string = 'http://34.67.100.60:';
    urlarr:string [] =[
        'http://busg1.us-e2.cloudhub.io', //1
        '', //2
        'http://35.206.98.190', //3
        'http://esb4.djgg.ml:3030', //4 
        'http://34.123.238.63:8280/services/integrador', //5
        '', //6
        'http://68.183.102.104:3000', //7
        'http://35.232.242.252:9999/', //8
        'http://sa-g9.us-e2.cloudhub.io', //9
        'http://34.73.157.172:5005', //10
        'http://soagrupo11.us-e2.cloudhub.io',//11
        '',//12
        'http://www.sa-proyecto.tk',//13
        '',//14
        '',
        '',
        '',
        ''];
    constructor(private http: HttpClient) { }

    get(tienda: number,endpoint: string, reqOpts?: any): Observable<any> {
        console.log('tiendas get')
        console.log(this.urlarr[tienda])
        return this.http.get(this.urlarr[tienda] + endpoint, {
            params: reqOpts,
            headers: this.headers
        });
    }
    get2(tienda: number,endpoint: string, reqOpts?: any) {
        return this.http.get(this.urlarr[tienda]+endpoint, {
            params: reqOpts,
            headers: this.headers
        });
    }

    post(tienda: number,endpoint: string, body: any, reqOpts?: any) {
        console.log(tienda);
        console.log(this.urlarr[tienda]);
        return this.http.post(this.urlarr[tienda] + endpoint, body, {
            params: reqOpts,
            headers: this.headers
        });
    }
    post2(tienda: number,endpoint: string, body: any, reqOpts?: any): Observable<any>{
        console.log(tienda);
        console.log(this.urlarr[tienda]);
        return this.http.post(this.urlarr[tienda] + endpoint, body, {
            params: reqOpts,
            headers: this.headers
        });
    }


    put(tienda:number,endpoint: string, body: any, reqOpts?: any) {
        return this.http.put(this.urlarr[tienda] + endpoint, body, {
            params: reqOpts,
            headers: this.headers
        });
    }

    delete(tienda: number,endpoint: string, reqOpts?: any) {
        return this.http.delete(this.urlarr[tienda]+ endpoint, {
            params: reqOpts,
            headers: this.headers
        });
    }

    async getHeaders() {
        //let token = await this.storage.getItem('token');
        let token = 'hola';
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
    }
}
