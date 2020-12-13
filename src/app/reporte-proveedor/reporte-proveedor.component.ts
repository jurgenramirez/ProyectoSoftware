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

  constructor(private rutaActiva: ActivatedRoute
    ,private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.user = this.rutaActiva.snapshot.params.idProveedor;

    this.http.post('http://34.67.194.244:5002/getresumen',
    {
      idproveedor: this.user,
    }).subscribe((data) => {
      this.users = data['result'];
      this.x = this.users['idtotalcantidad'];
      this.y = this.users['total'];
      //this.id = this.users['total'];
      console.log(this.users);
      
    })

  }
}
