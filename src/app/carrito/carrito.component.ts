import { Component, OnInit } from '@angular/core';
import { Producto } from './../models/producto';
import { Subscription } from 'rxjs';
import {CarritoService} from 'src/app/services/carrito.service'
import { ActivatedRoute } from '@angular/router';

import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carrito: Array<Producto> = [];
  private subscription: Subscription;
  total: number;

  user :string;
  Tarjetas:any[];

  contador: any [];

  sign: FormGroup;

  constructor(private carritoService: CarritoService,
    private rutaActiva: ActivatedRoute, 
    private http: HttpClient) { }

  ngOnInit(): void {

    

    this.sign = new FormGroup({
      direccion: new FormControl(null, [Validators.required]),
      tipo: new FormControl(null),
      contador: new FormControl(null),
    });
    this.user = this.rutaActiva.snapshot.params.idCliente;

    this.http.get(`http://34.67.100.60:5000/getTarjetas?idCliente=${this.user}`).subscribe(data=>{  
      
      this.Tarjetas = data['result'];
    
    });

    this.carritoService.getCarrito().subscribe(data => {
      
      this.carrito = data;
      this.carrito.forEach(function(item){
        
        item.cantidad=1
     });
  
      console.log('data Carrito')
      console.log(data);
      //this.total = this.carritoService.getTotal();
      this.calcularTotal();
    },error => alert(error));

  }


  Comprar(){

   this.carrito.forEach(function(item){
      console.log('**** Producto ****')
      console.log(item.idProducto)
      console.log(item.cantidad)
   });

   

    // var jsonS = {
      
    //   "idCliente": this.user,
    //   "idTarjeta": this.sign.value.tipo,
    //   "direccionEnvio": this.sign.value.direccion,
    //   detalle: []
    // };

    // this.carrito.forEach(element => {
    //   jsonS.detalle.push({
    //     "idProducto" : element.idProducto,
    //     "precio": element.precioVenta
    //   });
    // });


    // //console.log(jsonS);
    // console.log(JSON.stringify(jsonS));
  
  }

  actualizarCantidad(valor){
    this.carrito.forEach(function(item){
 
      console.log(valor);
      // console.log(id);
      // if(item.idProducto==id){
      //   item.cantidad =valor;
      // }
      
   });
   
  }
  calcularTotal(){
    let contabi=0;
    this.carrito.forEach(function(item){
      contabi += item.precioVenta * item.cantidad;
   });
    this.total = contabi;
  }
  actualizarCantidad2(cantidad,id){
    this.carrito.forEach(function(item){
 
      if(item.idProducto==id){
        item.cantidad =cantidad;
        
      }
      
   });
   this.calcularTotal();
  }

}

