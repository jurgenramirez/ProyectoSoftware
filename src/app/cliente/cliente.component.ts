import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  Productos:any[];

  constructor(private rutaActiva: ActivatedRoute 
    ,private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(`http://34.66.195.21:5001/productos`).subscribe(data=>{  
      
      this.Productos = data['result'];
       console.log(this.Productos);
    });


  }



}
