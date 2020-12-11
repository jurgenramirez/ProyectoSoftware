import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ProveedoresComponent } from './proveedores.component';
import { ProveedoresRoutes } from './proveedores.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProveedoresRoutes),
    NgbModule
  ],
  declarations: [ProveedoresComponent]
})
export class ProveedoresModule { }
