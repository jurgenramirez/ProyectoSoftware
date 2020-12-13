import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductoComponent } from '../addproducto/addproducto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddproductoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProveedorProductoModule { }
