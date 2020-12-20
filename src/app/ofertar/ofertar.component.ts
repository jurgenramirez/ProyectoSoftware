import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ofertar',
  templateUrl: './ofertar.component.html',
  styleUrls: ['./ofertar.component.scss']
})
export class OfertarComponent implements OnInit {

  sign: FormGroup;
  idCliente :string;
  idSubasta :string;
  constructor(private rutaActiva: ActivatedRoute
    ,private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.idSubasta = this.rutaActiva.snapshot.params.idSubasta;
    this.idCliente = this.rutaActiva.snapshot.params.idCliente;

    this.sign = new FormGroup({
      numero: new FormControl(null, [Validators.required]),
    });
  }

  agregarOferta(){

    console.log(this.idSubasta);
    console.log(this.sign.value.numero);
    console.log(this.idCliente);

    this.http.post('http://34.66.195.21:5001/oferta',
    {
      idSubasta: this.idSubasta,
      precio: this.sign.value.numero,
      idCliente: this.idCliente,

    }).subscribe((response) => {
      console.log(response);
      
    });

  }

}
