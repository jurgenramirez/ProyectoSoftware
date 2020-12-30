import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../models/producto';
import { CarritoService } from '../services/carrito.service';
import { ApiTiendasService } from '../services/apitiendas.service';

@Component({
  selector: 'app-esbcarrito',
  templateUrl: './esbcarrito.component.html',
  styleUrls: ['./esbcarrito.component.scss']
})
export class EsbcarritoComponent implements OnInit {

  carrito: Array<Producto> = [];
  total: number;
  sign: FormGroup;

  dato : any;
  dato1 : any;
  constructor(private carritoService: CarritoService , private apiTienda: ApiTiendasService) { }

  ngOnInit(): void {
    this.dato = localStorage.getItem('currentUser');
    this.dato1 = localStorage.getItem('currentStore');

    this.sign = new FormGroup({
      direccion: new FormControl(null, [Validators.required]),
      tipo: new FormControl(null),
      contador: new FormControl(null),
    });

    this.carritoService.getCarrito().subscribe(data => {
      
      this.carrito = data;
      this.carrito.forEach(function(item){
        item.cantidad=1
     });
    
     this.calcularTotal();

    },error => alert(error));

  }

  calcularTotal(){
    let contabi=0;
    this.carrito.forEach(function(item){
      contabi += item.precio_venta * item.cantidad;
   });
    this.total = contabi;
  }

  actualizarCantidad2(cantidad,id){
    this.carrito.forEach(function(item){
 
      if(item.id_producto==id){
        item.cantidad =cantidad;
        
      }
      
   });
   this.calcularTotal();
  }

  Comprar(){ 

    
    
    let currentuser = this.dato;
   
    const jsonS = {
              
      
      id_cliente: currentuser,    
      productos: []
  
    };

    
    this.carrito.forEach(function(item){
      jsonS.productos.push({
        id_producto:item.id_producto,
        cantidad: item.cantidad,
      });
    });

    console.log(JSON.stringify(jsonS)); 


    
    
    let coditienda = this.dato1;

    this.apiTienda.post2(coditienda,'/realizar-compra', jsonS).subscribe(data=>{
      console.log(data);
    })

     
  }

}
