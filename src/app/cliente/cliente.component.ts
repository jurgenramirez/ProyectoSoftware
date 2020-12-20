import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  Productos:any[];
  Clientes:any[];
  idCliente: string;
  
  user :string;

  constructor(private rutaActiva: ActivatedRoute 
    ,private router: Router,
    private http: HttpClient,
    private carritoService: CarritoService) { }


  ngOnInit(): void {

    this.user = this.rutaActiva.snapshot.params.idUser;

    console.log("Cliente", this.user);



    this.http.get(`http://34.66.195.21:5001/productos`).subscribe(data=>{  
      
      this.Productos = data['result'];
       //console.log(this.Productos);
    });

    this.http.get(`http://34.67.100.60:5000/getCliente?idUsuario=${this.user}`).subscribe(data=>{
      
      this.Clientes = data['result'];
      this.idCliente = this.Clientes['idCliente'];
  
      //this.idCliente = this.Clientes.idCliente;
      console.log(this.idCliente);   
  
    });

  }

  favoritos(producto){

    console.log(producto.idProducto);
    console.log(this.idCliente);
    
    this.http.post('http://34.66.195.21:5001/favorito',
    {
      idProducto: producto.idProducto,
      idCliente: this.idCliente,

    }).subscribe((response) => {
      console.log(response);
      
    })

    return this.router.navigateByUrl(`/favoritos/${this.idCliente}`);

  }

  addProducto(producto) {
    
    
    this.carritoService.addCarrito(producto);
    console.log("ok")

    return this.router.navigateByUrl(`/carrito/${this.idCliente}`);

  }

}
