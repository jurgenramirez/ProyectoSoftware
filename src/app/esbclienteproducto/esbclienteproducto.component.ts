import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import { ApiTiendasService } from '../services/apitiendas.service';
import { ProductoGlobal, ProductoGlobalCli } from '../models/producto';

@Component({
  selector: 'app-esbclienteproducto',
  templateUrl: './esbclienteproducto.component.html',
  styleUrls: ['./esbclienteproducto.component.scss']
})
export class EsbclienteproductoComponent implements OnInit {
  sign: FormGroup;
  user :string;
  usersx: any;
  users: any[] = [];
  idprove:any;
  idtienda:any;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  extension:string;

  constructor(private rutaActiva: ActivatedRoute
    ,private router: Router, private http: HttpClient, private apiTienda: ApiTiendasService,public formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.idprove = localStorage.getItem('currentUser');
    this.idtienda = localStorage.getItem('currentStore');
   
    
    this.sign = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      descripcion:new FormControl(null, [Validators.required]),
      pventa: new FormControl(null),
      stock: new FormControl(null),
      tipo: new FormControl(null),
      imagen: new FormControl(null)
    });

   


    
  
  }

  agregarProducto():void{

    let producto = new ProductoGlobalCli();
    producto.id_cliente = this.idprove;
    producto.nombre = this.sign.value.nombre;
    producto.descripcion = this.sign.value.descripcion;
    producto.precio_venta = this.sign.value.pventa;
    producto.stock = this.sign.value.stock;
    producto.foto = this.sign.value.imagen;
    console.log(producto);
    this.apiTienda.post2(this.idtienda,'/crear-producto-cliente',producto).subscribe(data=>{
        console.log(data);
        if(data.status == "success"){
          this.set_form();
          alert("CREADOS CON EXITO")
        }else{
          alert("Verfique los datos ingresados")
        }

    });
    
    
  }
  
  set_form():void{
    this.sign = this.formBuilder.group({
      nombre: new FormControl(null, [Validators.required]),
      descripcion:new FormControl(null, [Validators.required]),
      pventa: new FormControl(null),
      stock: new FormControl(null),
      tipo: new FormControl(null),
      imagen: new FormControl(null)
      
    });
  }
  

}
