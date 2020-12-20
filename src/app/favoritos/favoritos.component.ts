import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  headers: HttpHeaders;
  user :string;
  Favoritos:any[];
  fav: Array<any> = [];
  productos: any[];
  constructor(private rutaActiva: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.user = this.rutaActiva.snapshot.params.idCliente;

    this.http.get(`http://34.66.195.21:5001/favoritos?idCliente=${this.user}`).subscribe(data=>{  
      
      this.Favoritos = data['result'];
      console.log(this.Favoritos);
    });

  }

  sendDeleteRequestFavoritos(id){


    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        idFavorito: id
      },
    };
    
    this.http
      .delete('http://34.66.195.21:5001/favorito', options)
      .subscribe((s) => {
        console.log(s);
      });

  }

}
