import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { ProveedorService } from '../services/product.service'
import { Login } from 'src/app/models/login';
import { Router, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  coche: {idUser: string};

  user :string;

  idProveedor :number;

  usersx: any;
  users: any[];
  x: "";

  myurl : string;
  ///
  listaProductos: any[] = [];
  Productos:any[];


  constructor(private rutaActiva: ActivatedRoute 
    ,private router: Router,
    private http: HttpClient) { 

    console.log(this.rutaActiva.snapshot.paramMap.get('idUser'));


  }

  addProduct(){

    console.log("Bienvenido");

  }

  sendDeleteRequestProducto(id){

    console.log(id);

  }

  ngOnInit(): void {

    
    this.coche = {
      idUser: this.rutaActiva.snapshot.params.idUser,
    };

    this.user = this.rutaActiva.snapshot.params.idUser;

     this.http.get(`http://34.72.4.108:5000/getProveedor?idUsuario=${this.user}`)
     .subscribe((data) =>{

      this.usersx = data['result'];
      this.users = this.usersx['0']
      this.x = this.users['nombre'];
      this.idProveedor = this.users['idProveedor'];

      console.log("Proveedor",this.idProveedor);

    
      this.http.get(`http://34.72.4.108:5001/productos?idProveedor=${this.idProveedor}`)
      .subscribe((data) =>{
 
       this.Productos = data['result'];
       console.log(this.Productos);
       
 
      });
      
     });

  }

}


