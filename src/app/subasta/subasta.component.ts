import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta.component.html',
  styleUrls: ['./subasta.component.scss']
})
export class SubastaComponent implements OnInit {

  sign: FormGroup;
  user :string;

  categorias: any[] = [];

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
    

    
    
    this.http.post('http://34.66.195.21:5001/subasta',
    {

      idCategoria: this.sign.value.tipo,    
      nombre: this.sign.value.nombre,
      precioVenta: this.sign.value.pv,
      idUsuario: this.user,
      precioInicial: this.sign.value.pi,
      fechaFinal: this.sign.value.fe
      

    }).subscribe((response) => {
      console.log(response);
      
    })

    
    

  }

}
