import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { FooterModule } from './footer/footer.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { GPageNotFoundComponent } from './g-page-not-found/g-page-not-found.component';
import { BrowseModule } from './browse/browse.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { SearchModule } from './search/search.module';
import { ProductService } from './services/product.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { CartEffects } from './store/cart/cart.effects';
import { OrderEffects } from './store/order/order.effects';
import { CartService } from './services/cart.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from './services/order.service';
import { TokenService } from './services/token.service';
import { AuthEffects } from './store/auth/auth.effects';
import { TokenInterceptor } from './services/token.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { ShowcaseEffects } from './store/showcase/showcase.effects';
import { AccountService } from './services/account.service';
import { BrowseEffects } from './store/browse/browse.effects';
import { VerificationModule } from './verification/verification.module';
import { NonAuthGuardService } from './services/non-auth-guard.service';

import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProveedorComponent } from './update-proveedor/update-proveedor.component';
import { ReporteProveedorComponent } from './reporte-proveedor/reporte-proveedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProfileclienteComponent } from './profilecliente/profilecliente.component';
import { TarjetaClienteComponent } from './tarjeta-cliente/tarjeta-cliente.component';
import { AgregartcComponent } from './agregartc/agregartc.component';
import { CarritoComponent } from './carrito/carrito.component';
import { SubastaComponent } from './subasta/subasta.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { OfertarComponent } from './ofertar/ofertar.component';
import { VerofertaComponent } from './veroferta/veroferta.component';
import { SubastaganadaComponent } from './subastaganada/subastaganada.component';
import { ReporteclienteComponent } from './reportecliente/reportecliente.component';
import { LoginSbComponent } from './login-sb/login-sb.component';
import { RegisterSbComponent } from './register-sb/register-sb.component';
import { EsbclienteComponent } from './esbcliente/esbcliente.component';
import { EsbcarritoComponent } from './esbcarrito/esbcarrito.component';
import { EsbverproductoComponent } from './esbverproducto/esbverproducto.component';
import { LoginprovEsbComponent } from './loginprov-esb/loginprov-esb.component';
import { EsbproveedorComponent } from './esbproveedor/esbproveedor.component';
import { EsbclienteproductoComponent } from './esbclienteproducto/esbclienteproducto.component';


@NgModule({
  declarations: [
    AppComponent,
    GPageNotFoundComponent,
    ReporteProveedorComponent,
    ClienteComponent,
    ProfileclienteComponent,
    TarjetaClienteComponent,
    AgregartcComponent,
    CarritoComponent,
    SubastaComponent,
    FavoritosComponent,
    OfertasComponent,
    OfertarComponent,
    VerofertaComponent,
    SubastaganadaComponent,
    ReporteclienteComponent,
    LoginSbComponent,
    RegisterSbComponent,
    EsbclienteComponent,
    EsbcarritoComponent,
    EsbverproductoComponent,
    LoginprovEsbComponent,
    EsbproveedorComponent,
    EsbclienteproductoComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    BrowseModule,
    ProductDetailModule,
    FormsModule,
    ReactiveFormsModule,
    // CartModule, lazy loaded module not imported here
    // CheckoutModule, lazy loaded module not imported here
    // AccountModule, lazy loaded module not imported here
    VerificationModule,
    SearchModule,
    AuthModule,
    // FaqModule, lazy loaded module not imported here
    FooterModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CartEffects, OrderEffects, AuthEffects, ShowcaseEffects, BrowseEffects]),
    RouterModule.forRoot(AppRoutes, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ProductService, CartService, OrderService, TokenService, AuthGuardService, NonAuthGuardService, AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
