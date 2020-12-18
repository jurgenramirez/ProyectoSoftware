import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActualizaProducto } from 'src/app/models/ActualizarProducto';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-update-proveedor',
  templateUrl: './update-proveedor.component.html',
  styleUrls: ['./update-proveedor.component.scss']
})
export class UpdateProveedorComponent implements OnInit {
  sign: FormGroup;

  idProducto :string;


  constructor(private rutaActiva: ActivatedRoute, private http: HttpClient, private router: Router, ) { }


  ngOnInit(): void {

    this.sign = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null),
    });
    
    this.idProducto = this.rutaActiva.snapshot.params.idProducto;
    console.log(this.idProducto);
  }

  Actualizar(): void{

      this.http.post('http://35.202.93.127:5002/updateproducto',
      {
        idproducto: this.idProducto,
        precioVenta: this.sign.value.nombre,
        stock: this.sign.value.apellido
      }).subscribe((response) => {
        console.log(response);
        
      })
    
  }

  a(){
    return this.router.navigateByUrl('/proveedores/19');
  }

}
