import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veroferta',
  templateUrl: './veroferta.component.html',
  styleUrls: ['./veroferta.component.scss']
})
export class VerofertaComponent implements OnInit {

  Ofertas: any[] = [];
  subasta :string;
  constructor(private http: HttpClient,private rutaActiva: ActivatedRoute) { }


  ngOnInit(): void {

    this.subasta = this.rutaActiva.snapshot.params.idSubasta;
    this.http.get(`http://34.66.195.21:5001/ofertas?idSubasta=${this.subasta}`).subscribe(data=>{  
      this.Ofertas = data['result'];
      console.log(this.Ofertas);
    });

  }

}
