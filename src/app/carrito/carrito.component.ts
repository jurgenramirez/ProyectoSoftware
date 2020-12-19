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
      this.total = this.carritoService.getTotal();
      
    },error => alert(error));

  }

  Comprar(){

    

    var jsonS = {
      
      "idCliente": this.user,
      "idTarjeta": this.sign.value.tipo,
      "direccionEnvio": this.sign.value.direccion,
      detalle: []
    };

    this.carrito.forEach(element => {
      jsonS.detalle.push({
        "idProducto" : element.idProducto,
        "precio": element.precioVenta
      });
    });


    //console.log(jsonS);
    console.log(JSON.stringify(jsonS));
  
  }

}

