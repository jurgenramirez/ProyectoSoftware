import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable , Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  private itemsCarrito: Producto[] = [];

  constructor() {
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  addCarrito(producto: Producto) {
    this.subject.next([...this.itemsCarrito, producto]);
  }
  getCarrito(): Observable<Producto[]> {
    return this.subject;
  }

  getTotal() {
    return this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio_venta ; }, 0);
  }

}
