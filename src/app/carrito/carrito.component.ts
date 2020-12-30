import { Component, OnInit } from '@angular/core';
import { Producto } from './../models/producto';
import { Subscription } from 'rxjs';
import {CarritoService} from 'src/app/services/carrito.service'
import { ActivatedRoute } from '@angular/router';

import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  headers: HttpHeaders;
  carrito: Array<Producto> = [];
  private subscription: Subscription;
  total: number;

  user :string;
  Tarjetas:any[];

  contador: any [];

  sign: FormGroup;

  body : string;



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
    
     this.calcularTotal();

    },error => alert(error));

  }

  sendPostRequest(data: any): Observable<any> {

    return this.http.post('http://34.66.195.21:5001/pedido', data, {
      headers: this.headers
    });

    // return this.http.post<any>('http://34.66.195.21:5001/pedido', data);

  }

  Comprar(){ 
   
    const jsonS = {
              
      idCliente: this.user,    
      idTarjeta: this.sign.value.tipo,    
      direccionEnvio: this.sign.value.direccion,
      total : this.total,
      detalle: []
  
    };

    this.carrito.forEach(function(item){
      jsonS.detalle.push({
        //idProducto:item.idProducto,
        idProducto:item.id_producto,
        cantidad: item.cantidad,
        //precio: item.precioVenta
        precio: item.precio_venta
      });
    });




    
    
    /*
    this.carrito.forEach(element => {
      jsonS.detalle.push({
        "idProducto" : element.idProducto,
        "precio": element.precioVenta
      });
    });
    */

   
    /*
    this.carrito.forEach(function(item){
         
      console.log('**** Producto ****')
      console.log(item.idProducto)
      console.log(item.cantidad)
      console.log(item.precioVenta)
  
    });
    console.log(this.total);
    */

   
    

   
    //this.body= JSON.stringify(jsonS);
    
    console.log(JSON.stringify(jsonS)); 
    // this.http.post('http://34.66.195.21:5001/pedido',

    
    // {data: JSON.stringify(jsonS)}
      
    // ).subscribe((response) => {
    //   console.log(response);
      
    // })
    this.sendPostRequest(jsonS).subscribe((response)=>{
      console.log(response)
    });
    
    
    
    //alert("Productos Comprados");
     
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
      //contabi += item.precioVenta * item.cantidad;
      contabi += item.precio_venta * item.cantidad;
   });
    this.total = contabi;
  }
  actualizarCantidad2(cantidad,id){
    this.carrito.forEach(function(item){
 
      //if(item.idProducto==id){
      if(item.id_producto==id){
        item.cantidad =cantidad;
        
      }
      
   });
   this.calcularTotal();
  }

}

