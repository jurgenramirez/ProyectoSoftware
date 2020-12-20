import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reporte-proveedor',
  templateUrl: './reporte-proveedor.component.html',
  styleUrls: ['./reporte-proveedor.component.scss']
})
export class ReporteProveedorComponent implements OnInit {


  user :string;

  usersx: any;
  users: any[];
  x: "";
  y: "";

  Ventas: any[] = [];
  constructor(private rutaActiva: ActivatedRoute
    ,private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.user = this.rutaActiva.snapshot.params.idProveedor;

    this.http.get(`http://34.66.195.21:5001/ventas?idProveedor=${this.user}`).subscribe(data=>{  
      this.Ventas = data['result'];
      console.log(this.Ventas);
    });




  }
}
