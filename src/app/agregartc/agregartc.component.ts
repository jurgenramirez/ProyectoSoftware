import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregartc',
  templateUrl: './agregartc.component.html',
  styleUrls: ['./agregartc.component.scss']
})
export class AgregartcComponent implements OnInit {

  sign: FormGroup;
  user :string;

  constructor(private rutaActiva: ActivatedRoute
    ,private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.user = this.rutaActiva.snapshot.params.idCliente;

    this.sign = new FormGroup({
      numero: new FormControl(null, [Validators.required]),
      fe: new FormControl(null),
      clave: new FormControl(null),
    });
  }
  agregarTarjeta():void{
    console.log(this.user);
    
    console.log(this.sign.value.numero);
    console.log(this.sign.value.fe);
    console.log(this.sign.value.clave);

    this.http.post('http://34.67.100.60:5000/registrarTarjeta',
    {
      numero: this.sign.value.numero,
      fechaexp: this.sign.value.fe,
      clave: this.sign.value.clave,
      idCliente : this.user
      

    }).subscribe((response) => {
      console.log(response);
      
    })
    
  }

}
