import { AuthState } from './../../store/auth/auth.reducer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as AuthActions from '../../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs';
import * as PasswordValidators from '../../../utils//validators/password.validator';
import * as _ from 'lodash';
import { RegisterService } from '../../services/register.service';
import { Cliente } from '../../models/cliente';
import { Proveedor } from '../../models/proveedor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';
  authState: Observable<AuthState>;
 
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  extension:string;
  constructor(private store: Store<fromApp.AppState>,private registerService:RegisterService,public formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null),
      celular: new FormControl(null),
      tipo: new FormControl(null, [Validators.required]),
      direccion: new FormControl(null, [Validators.required]),
      passwordGroup: new FormGroup({
        newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
        newPasswordConfirm: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
      }, PasswordValidators.passwordMatchCheckValidator.bind(this))
    });

    this.authState = this.store.select('auth');
  }


  onSubmitted() {

      if(this.signUpForm.value.tipo=='Proveedor'){
        let prov= new Proveedor();
        prov.nombre=this.signUpForm.value.nombre;
        prov.direccion=this.signUpForm.value.direccion;
        prov.email=this.signUpForm.value.email;
        prov.password=this.signUpForm.value.passwordGroup.newPassword;
        this.registerService.registerProveedor(prov).subscribe(data=>{
          console.log('se guardo:');
          console.log(data);
          this.set_form_signup();
        });

      }else if(this.signUpForm.value.tipo='Cliente'){
         let cli= new Cliente();
         cli.nombre=this.signUpForm.value.nombre;
         cli.apellido=this.signUpForm.value.apellido;
         cli.celular=this.signUpForm.value.celular;
         cli.email=this.signUpForm.value.email;
         cli.password=this.signUpForm.value.passwordGroup.newPassword;
         cli.foto=this.cardImageBase64;
         if(this.extension=='image/png'){
           cli.extension='png';
         }else{
           cli.extension='jpg';
         }
         this.registerService.registerclient(cli).subscribe(data=>{
           console.log('se guardo:');
           this.set_form_signup();
           console.log(data);
         })
    }
  }

  fileChangeEvent(fileInput: any) {

        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';

                return false;
            }

            if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG )';
                return false;
            }
            this.extension = fileInput.target.files[0].type;
          
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];

                    console.log(img_height, img_width);


                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                            max_height +
                            '*' +
                            max_width +
                            'px';
                        return false;
                    } else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }

    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }
    set_form_signup():void{
      this.signUpForm = this.formBuilder.group({
        email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
        nombre: new FormControl(null, [Validators.required]),
        apellido: new FormControl(null),
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
