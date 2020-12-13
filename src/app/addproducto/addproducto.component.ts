import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.scss']
})
export class AddproductoComponent implements OnInit {
  sign: FormGroup;
  user :string;
  usersx: any;
  users: any[] = [];


  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  extension:string;

  constructor(private rutaActiva: ActivatedRoute
    ,private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.sign = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      pventa: new FormControl(null),
      stock: new FormControl(null),
      tipo: new FormControl(null),
    });

    this.user = this.rutaActiva.snapshot.params.idProveedor;
    


    
    this.http.get(` http://34.67.194.244:5002/getcategorias`).subscribe(data=>{  
      this.users = data['result'];
      
      //this.users = this.usersx[length];
      /*
      this.x = this.users['nombre'];
      this.idProveedor = this.users['idProveedor'];
      */
      console.log(this.users);
    });

  }

  agregarProducto():void{

    console.log(this.user);
    console.log("Categoria",this.sign.value.tipo);
    console.log(this.sign.value.nombre);
    console.log(this.sign.value.pventa);
    console.log(this.sign.value.stock);
    console.log(this.sign.value.stock);
    console.log(this.cardImageBase64);

    this.http.post('http://34.67.194.244:5002/addproducto',
    {
      idproveedor: this.user,
      idcategoria: this.sign.value.tipo,
      nombre: this.sign.value.nombre,
      precioVenta:this.sign.value.pventa,
      stock: this.sign.value.stock,
      foto: this.cardImageBase64

    }).subscribe((response) => {
      console.log(response);
      
    })
    
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

}
