import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta.component.html',
  styleUrls: ['./subasta.component.scss']
})
export class SubastaComponent implements OnInit {

  sign: FormGroup;
  user :string;

  categorias: any[] = [];

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  extension:string;

  constructor(private rutaActiva: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.user = this.rutaActiva.snapshot.params.idUser;

    this.sign = new FormGroup({
      tipo: new FormControl(null),
      nombre: new FormControl(null, [Validators.required]),
      pv: new FormControl(null),
      pi: new FormControl(null),
      fe: new FormControl(null),
      
    });

    this.http.get(`http://35.202.93.127:5002/getcategorias`).subscribe(data=>{  
      this.categorias = data['result'];
      console.log(this.categorias);
    });

  }

  agregarSubasta(){
    console.log(this.sign.value.tipo);
    console.log(this.sign.value.nombre);
    console.log(this.sign.value.pv);
    console.log(this.user);   
    console.log(this.sign.value.pi);
    console.log(this.sign.value.fe);
    console.log(this.cardImageBase64);
    
    
    this.http.post('http://34.66.195.21:5001/subasta',
    {

      idCategoria: this.sign.value.tipo,    
      nombre: this.sign.value.nombre,
      precioVenta: this.sign.value.pv,
      idUsuario: this.user,
      precioInicial: this.sign.value.pi,
      fechaFinal: this.sign.value.fe,
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
