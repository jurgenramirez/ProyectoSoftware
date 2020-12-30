import { AuthState } from './../store/auth/auth.reducer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as AuthActions from '../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { Observable } from 'rxjs';
import * as PasswordValidators from '../../utils//validators/password.validator';
import * as _ from 'lodash';
import { RegisterService } from '../services/register.service';
import { Cliente, ClienteGlobal } from '../models/cliente';
import { Proveedor, ProveedorGlobal } from '../models/proveedor';
import { ApiTiendasService } from '../services/apitiendas.service';


@Component({
  selector: 'app-register-sb',
  templateUrl: './register-sb.component.html',
  styleUrls: ['./register-sb.component.scss']
})

export class RegisterSbComponent implements OnInit {

  signUpForm: FormGroup;
  emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';
  authState: Observable<AuthState>;
 
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  extension:string;
  constructor(private store: Store<fromApp.AppState>,private registerService:RegisterService,public formBuilder:FormBuilder, private apiTienda: ApiTiendasService) {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      tienda: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null),
      celular: new FormControl(null),
      tipo: new FormControl(null, [Validators.required]),
      direccion: new FormControl(null),
      empresa: new FormControl(null),
      passwordGroup: new FormGroup({
        newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
        newPasswordConfirm: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
      }, PasswordValidators.passwordMatchCheckValidator.bind(this))
    });

    this.authState = this.store.select('auth');
  }


  onSubmitted() {

      if(this.signUpForm.value.tipo=='Proveedor'){
        let prov= new ProveedorGlobal();
        prov.nombre=this.signUpForm.value.nombre;
        prov.apellido=this.signUpForm.value.apellido;
        prov.direccion=this.signUpForm.value.direccion;
        prov.email=this.signUpForm.value.email;
        prov.contrasena=this.signUpForm.value.passwordGroup.newPassword;
        prov.empresa = this.signUpForm.value.empresa;
        var coditienda = this.signUpForm.value.tienda;
        console.log(prov);
        this.apiTienda.post2(coditienda,'/registrar-proveedor',prov).subscribe(data=>{
          console.log(data);
      });
     
        // this.registerService.registerProveedor(prov).subscribe(data=>{
        //   console.log('se guardo:');
        //   console.log(data);
        //   this.set_form_signup();
        // });
        /*

        */

      }else if(this.signUpForm.value.tipo='Cliente'){
         let cli= new ClienteGlobal();
         cli.nombre=this.signUpForm.value.nombre;
         cli.apellido=this.signUpForm.value.apellido;
         cli.celular=this.signUpForm.value.celular;
         cli.email=this.signUpForm.value.email;
         cli.contrasena=this.signUpForm.value.passwordGroup.newPassword;
        console.log(cli);
         var coditienda = this.signUpForm.value.tienda;
         this.apiTienda.post2(coditienda,'/registrar-cliente',cli).subscribe(data=>{
          console.log(data);
         });
        //  this.registerService.registerclient(cli).subscribe(data=>{
        //    console.log('se guardo:');
        //    this.set_form_signup();
        //    console.log(data);
        //  })
    }
  }

  

    set_form_signup():void{
      this.signUpForm = this.formBuilder.group({
        email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
        nombre: new FormControl(null, [Validators.required]),
        apellido: new FormControl(null),
        empresa: new FormControl(null),
        celular: new FormControl(null),
        tipo: new FormControl(null, [Validators.required]),
        direccion: new FormControl(null, [Validators.required]),
        passwordGroup: new FormGroup({
          newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
          newPasswordConfirm: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
        }, PasswordValidators.passwordMatchCheckValidator.bind(this))
      });
    }

}
