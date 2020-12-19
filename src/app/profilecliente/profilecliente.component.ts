import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilecliente',
  templateUrl: './profilecliente.component.html',
  styleUrls: ['./profilecliente.component.scss']
})
export class ProfileclienteComponent implements OnInit {

  user :string;
  Clientes:any[];
  C:any[];
  idCliente: string;
  nombre: string;
  apellido: string;
  celular: string;
  foto: string;

  constructor(private rutaActiva: ActivatedRoute 
    ,private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.user = this.rutaActiva.snapshot.params.idUser;
    console.log(this.user);

    this.http.get(`http://34.67.100.60:5000/getCliente?idUsuario=${this.user}`).subscribe(data=>{  
      
      this.Clientes = data['result'];
      
      this.idCliente = this.Clientes['idCliente'];
      this.nombre = this.Clientes['nombre'];
      this.apellido = this.Clientes['apellido'];
      this.celular = this.Clientes['celular'];
      this.foto = this.Clientes['foto'];

      console.log(this.Clientes);
    });


  }

}
