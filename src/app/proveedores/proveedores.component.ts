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


  categorias: any[] = [];


  myurl : string;
  ///
  listaProductos: any[] = [];
  Productos:any[];

  proveedornombre: string;


  constructor(private rutaActiva: ActivatedRoute 
    ,private router: Router,
    private http: HttpClient) { 

      


  }

  addProduct(){

    
    return this.router.navigateByUrl(`/producto/addProducto/${this.idProveedor}`);
    

  }

  reporteVenta(){

    return this.router.navigateByUrl(`/prov/reporteventa/${this.idProveedor}`);
    
    

  }

  sendDeleteRequestProducto(id){

    console.log(id);
    

   this.http.post('http://35.202.93.127:5002/deleteproducto',
    {

      idproducto : id

    }).subscribe((response) => {
      console.log(response);
      
    })

  }



  ngOnInit(): void {

    
    this.coche = {
      idUser: this.rutaActiva.snapshot.params.idUser,
    };

    this.http.get(`http://35.202.93.127:5002/getcategorias`).subscribe(data=>{  
      this.categorias = data['result'];
      console.log(this.categorias);
    });

    this.user = this.rutaActiva.snapshot.params.idUser;

    console.log(this.user);

     this.http.get(`http://34.67.100.60:5000/getProveedor?idUsuario=${this.user}`)
     .subscribe((data) =>{

      


      this.usersx = data['result'];
      this.proveedornombre = this.usersx.nombre;
      this.idProveedor = this.usersx.idProveedor;
      

      console.log("Proveedor",this.idProveedor);
      console.log("Proveedor",this.proveedornombre);

      this.http.get(`http://34.66.195.21:5001/productos?idProveedor=${this.idProveedor}`)
      .subscribe((data) =>{
 
       this.Productos = data['result'];
       console.log(this.Productos);
       
 
      });

    
      
      
     });

  }

}


