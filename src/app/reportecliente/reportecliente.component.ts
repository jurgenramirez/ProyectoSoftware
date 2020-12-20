import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reportecliente',
  templateUrl: './reportecliente.component.html',
  styleUrls: ['./reportecliente.component.scss']
})
export class ReporteclienteComponent implements OnInit {

  idCliente :string;
  Reportes: any[] = [];
  constructor(private rutaActiva: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {

    this.idCliente = this.rutaActiva.snapshot.params.idCliente;

    this.http.get(`http://34.66.195.21:5001/pedidos?idCliente=${this.idCliente}`).subscribe(data=>{  
      this.Reportes = data['result'];
      console.log(this.Reportes);
    });

  }

}
