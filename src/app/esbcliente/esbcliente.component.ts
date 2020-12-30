import { Component, OnInit } from '@angular/core';
import { ApiTiendasService } from '../services/apitiendas.service';

@Component({
  selector: 'app-esbcliente',
  templateUrl: './esbcliente.component.html',
  styleUrls: ['./esbcliente.component.scss']
})
export class EsbclienteComponent implements OnInit {


  dato : any;
  store : number ;
  Productos:any[];

  constructor( private apiTiendas: ApiTiendasService) { }

  ngOnInit(): void {

    this.dato = localStorage.getItem('currentStore');
    
    let coditienda = this.dato;

    this.apiTiendas.get(coditienda,'/ver-productos').subscribe(data=>{
      
      
      this.Productos = data['data'];
      console.log(this.Productos);

    })

  }

}
