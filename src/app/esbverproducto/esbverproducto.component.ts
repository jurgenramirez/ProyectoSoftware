import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiTiendasService } from '../services/apitiendas.service';

@Component({
  selector: 'app-esbverproducto',
  templateUrl: './esbverproducto.component.html',
  styleUrls: ['./esbverproducto.component.scss']
})
export class EsbverproductoComponent implements OnInit {

  dato : any;
  producto :string;
  Productos:any[];


  id_producto: string;
  nombre: string;
  descripcion: string;
  stock: string;
  precio_venta :string;
  foto: string;


  constructor(private apiTiendas: ApiTiendasService , private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {

    this.producto = this.rutaActiva.snapshot.params.idProducto;

    this.dato = localStorage.getItem('currentStore');
    
    let coditienda = this.dato;

    this.apiTiendas.get(coditienda,`/ver-producto?id_producto=${this.producto}`).subscribe(data=>{
      
      this.Productos = data['data'];
      
      
      this.id_producto = this.Productos['id_producto'];
      this.nombre = this.Productos['nombre'];
      this.descripcion = this.Productos['descripcion'];
      this.stock = this.Productos['stock'];
      this.precio_venta = this.Productos['precio_venta'];
      this.foto = this.Productos['foto'];

    })

  }

}
