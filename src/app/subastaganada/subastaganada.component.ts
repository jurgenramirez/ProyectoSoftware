import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subastaganada',
  templateUrl: './subastaganada.component.html',
  styleUrls: ['./subastaganada.component.scss']
})
export class SubastaganadaComponent implements OnInit {

  idSubasta :string;
  constructor(private rutaActiva: ActivatedRoute, private http: HttpClient) { }

  Subastas: any[] = [];

  ngOnInit(): void {

    this.idSubasta = this.rutaActiva.snapshot.params.idSubasta;

    this.http.get(`http://34.66.195.21:5001/subastaGanada?idSubasta=${this.idSubasta}`).subscribe(data=>{  
      this.Subastas = data['result'];
      console.log(this.Subastas);
    });
  }

}
