import { Routes } from '@angular/router';
import { ProveedoresComponent } from './proveedores.component';


export const ProveedoresRoutes: Routes = [
  { path: '', component: ProveedoresComponent } // default because it is lazy loading
];
