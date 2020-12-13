import { GPageNotFoundComponent } from './g-page-not-found/g-page-not-found.component';
import { Routes } from '@angular/router';
import { ProveedoresComponent} from './proveedores/proveedores.component';
import { UpdateProveedorComponent } from './update-proveedor/update-proveedor.component';

export const AppRoutes: Routes = [
  { path: 'not-found', component: GPageNotFoundComponent, data: { message: 'Page not found!' } },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqModule' },
  //{ path: 'proveedores:id', loadChildren:'./proveedores/proveedores.module#ProveedoresModule'},
  { path: 'proveedores/:idUser', component:ProveedoresComponent},
  { path : 'proveedor/:idProducto', component:UpdateProveedorComponent},
  //{ path: '**', redirectTo: '/not-found' },
  
];

/* 
        <button class="btn btn-info" 
        [routerLink]="['/', 'proveedor', 'update']">Actualizar
      </button>
*/