import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tarjeta-cliente',
  templateUrl: './tarjeta-cliente.component.html',
  styleUrls: ['./tarjeta-cliente.component.scss']
})
export class TarjetaClienteComponent implements OnInit {

  user :string;
  Tarjetas:any[];
  headers: HttpHeaders;
  constructor(private rutaActiva: ActivatedRoute 
    ,private router: Router,
    private http: HttpClient) { }

    

  ngOnInit(): void {
    this.user = this.rutaActiva.snapshot.params.idCliente;

    this.http.get(`http://34.67.100.60:5000/getTarjetas?idCliente=${this.user}`).subscribe(data=>{  
      
      this.Tarjetas = data['result'];
    
      console.log(this.Tarjetas);
    });
  }

  
  
  
  sendDeleteRequestTarjeta(id){


    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        idTarjeta: id
      },
    };
    
    this.http
      .delete('http://34.67.100.60:5000/eliminarTarjeta', options)
      .subscribe((s) => {
        console.log(s);
      });

  }

  addTarjeta(){

    return this.router.navigateByUrl(`/agregartc/${this.user}`);

  }


}
