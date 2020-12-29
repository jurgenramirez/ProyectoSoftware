import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})


export class ApiTiendasService {
    headers: HttpHeaders;
    url: string = 'http://34.67.100.60:';
    urlarr:string [] =[
        'http://busg1.us-e2.cloudhub.io', 
        '', 
        'http://35.206.98.190', 
        'http://esb4.djgg.ml:3030', 
        'http://34.123.238.63:8280/services/integrador', 
        '',
        '',
        '',
        'http://sa-g9.us-e2.cloudhub.io',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''];
    constructor(private http: HttpClient) { }

    get(tienda: number,endpoint: string, reqOpts?: any) {
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
        console.log('post estoy aca')
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
