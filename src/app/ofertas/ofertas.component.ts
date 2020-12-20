import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  Subastas: any[] = [];
  Clientes:any[];
  idCliente: string;
  user :string;
  constructor(private http: HttpClient,private rutaActiva: ActivatedRoute ) { }

  ngOnInit(): void {

    this.user = this.rutaActiva.snapshot.params.idUser;

    this.http.get(`http://34.66.195.21:5001/subastas?soloActivas=1`).subscribe(data=>{  
      this.Subastas = data['result'];
      console.log(this.Subastas);
    });

    this.http.get(`http://34.67.100.60:5000/getCliente?idUsuario=${this.user}`).subscribe(data=>{
      
      this.Clientes = data['result'];
      this.idCliente = this.Clientes['idCliente'];
  
      //this.idCliente = this.Clientes.idCliente;
      console.log(this.idCliente);   
  
    })


  }

}
