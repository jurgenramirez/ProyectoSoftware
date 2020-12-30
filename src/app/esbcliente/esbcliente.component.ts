import { Component, OnInit } from '@angular/core';
import { ApiTiendasService } from '../services/apitiendas.service';
import {CarritoService } from 'src/app/services/carrito.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-esbcliente',
  templateUrl: './esbcliente.component.html',
  styleUrls: ['./esbcliente.component.scss']
})
export class EsbclienteComponent implements OnInit {


  dato : any;
  store : number ;
  Productos:any[];

  constructor( private apiTiendas: ApiTiendasService , private carritoService: CarritoService,
    private router: Router,) { }

  ngOnInit(): void {

    this.dato = localStorage.getItem('currentStore');
    
    let coditienda = this.dato;

    this.apiTiendas.get(coditienda,'/ver-productos').subscribe(data=>{
      
      
      this.Productos = data['data'];
      console.log(this.Productos);

    })

  }

  verProducto(idProducto){
    //console.log(idProducto);
    return this.router.navigateByUrl(`/esb/verproducto/${idProducto}`);
  }

  addProducto(producto) {
    
    
    this.carritoService.addCarrito(producto);
    console.log(producto)
    console.log("ok")

    return this.router.navigateByUrl(`/esb/carrito`);
    
  }

}
