import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActualizaProducto } from 'src/app/models/ActualizarProducto';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-update-proveedor',
  templateUrl: './update-proveedor.component.html',
  styleUrls: ['./update-proveedor.component.scss']
})
export class UpdateProveedorComponent implements OnInit {
  sign: FormGroup;

  idProducto :string;


  constructor(private rutaActiva: ActivatedRoute, private http: HttpClient ) { }


  ngOnInit(): void {

    this.sign = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null),
    });

    this.idProducto = this.rutaActiva.snapshot.params.idProducto;
    console.log(this.idProducto);
  }

  Actualizar(): void{


    /*
      this.http.post('http://34.67.194.244:5002/updateproducto',
      {
        idproducto: 8,
        precioVenta: 15000,
        stock: 15
      }).subscribe((response) => {
        console.log(response);
      })
    
    */
  }

}
