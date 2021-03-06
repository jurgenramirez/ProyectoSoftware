import { AuthState } from '../store/auth/auth.reducer';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../store/auth/auth.actions';
import { Observable, Subscription } from 'rxjs';


import { LoginService } from '../services/login.service'
import { LoginGlobal } from 'src/app/models/login';
import { Router, CanActivate } from '@angular/router';
import { ApiTiendasService } from '../services/apitiendas.service';


@Component({
  selector: 'app-login-sb',
  templateUrl: './login-sb.component.html',
  styleUrls: ['./login-sb.component.scss']
})
export class LoginSbComponent implements OnInit {

  signInForm: FormGroup;
  emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';

  authState: Observable<AuthState>;

  idUsuario ="";

  users: any[] = [];

  constructor(private store: Store<fromApp.AppState>, private loginservice:LoginService,
    private router: Router, private apiTiendas: ApiTiendasService) {
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      tienda: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
    });



    this.authState = this.store.select('auth');
  }


  onSubmitted() {

    let log = new LoginGlobal();
    log.email = this.signInForm.value.email;
    log.contrasena = this.signInForm.value.password;
    
    let coditienda =this.signInForm.value.tienda
    
    this.loginservice.loginTiendas(log,coditienda).subscribe(data=>{
      console.log(data);

      if(data.status == "success"){

        console.log("bienvenido");

        this.users = data['data'];
        //console.log(this.users['id'])
        
        localStorage.setItem("currentUser", this.users['id']);
        localStorage.setItem("currentStore",  coditienda);

        this.router.navigate(['/esb/cliente']);

      }else{

        console.log("Credenciales invalidas")

        alert("CREDENCIALES INVALIDAS")

      }

    });


    
    // this.loginservice.login(log).subscribe(data=>{
    //   console.log('inicio testeo');
    //   if(data.result == "Credenciales inválidas"){
    //     //this.router.navigate(['/login']);
    //     console.log('INVALIDO');
        
    //   }else if (data.result.rol == 1) {
    //     console.log(data.result);
    //     this.router.navigate(['/cliente',data.result.idUsuario]);
        
    //     /*
    //     this.store.dispatch(new AuthActions.SignIn({
    //       email: this.signInForm.value.email,
    //       password: this.signInForm.value.password,
    //       data:data.result

    //     }));
    //     */
      
    //     console.log('Bienvenido Cliente');
    //   }else if (data.result.rol == 2) {
    //     this.router.navigate(['/','proveedores',data.result.idUsuario]);
    //     this.idUsuario = data.result.idUsuario
    //     console.log(this.idUsuario);
    //     console.log('Bienvenido Proveedor')
    //   }
      
    // })

  }

}
