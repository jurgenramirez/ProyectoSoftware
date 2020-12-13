import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProveedorComponent } from '../update-proveedor/update-proveedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [UpdateProveedorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProveedorModule { }
