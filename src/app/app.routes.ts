import { GPageNotFoundComponent } from './g-page-not-found/g-page-not-found.component';
import { Routes } from '@angular/router';
import { ProveedoresComponent} from './proveedores/proveedores.component';
import { UpdateProveedorComponent } from './update-proveedor/update-proveedor.component';
import { AddproductoComponent} from './addproducto/addproducto.component';
import { ReporteProveedorComponent} from './reporte-proveedor/reporte-proveedor.component';
import { ClienteComponent} from './cliente/cliente.component';
import { ProfileclienteComponent } from './profilecliente/profilecliente.component';
import { TarjetaClienteComponent } from './tarjeta-cliente/tarjeta-cliente.component';
import { AgregartcComponent } from './agregartc/agregartc.component';

export const AppRoutes: Routes = [
  { path: 'not-found', component: GPageNotFoundComponent, data: { message: 'Page not found!' } },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqModule' },
  //{ path: 'proveedores:id', loadChildren:'./proveedores/proveedores.module#ProveedoresModule'},
  { path: 'proveedores/:idUser', component:ProveedoresComponent},
  { path: 'proveedor/:idProducto', component:UpdateProveedorComponent},
  { path: 'producto/addProducto/:idProveedor', component:AddproductoComponent},
  { path: 'prov/reporteventa/:idProveedor', component:ReporteProveedorComponent},
  { path: 'cliente/:idUser', component:ClienteComponent},
  { path: 'myProfilec/:idUser', component:ProfileclienteComponent},
  { path: 'mytarjetac/:idCliente', component:TarjetaClienteComponent},
  { path: 'agregartc/:idCliente', component:AgregartcComponent}
  //{ path: '**', redirectTo: '/not-found' },
  
];

/* 
        <button class="btn btn-info" 
        [routerLink]="['/', 'proveedor', 'update']">Actualizar
      </button>
*/