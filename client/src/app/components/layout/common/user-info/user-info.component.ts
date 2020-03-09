import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: []
})
export class UserInfoComponent implements OnInit {

  usuario:{
    nombre:string;
    apellido:string;
    imagen:string;
    correo:string;
  }

  constructor() { }

  ngOnInit(): void {
    this.usuario={
      nombre: sessionStorage.getItem('user.nombre'),
      apellido: sessionStorage.getItem('user.apellido'),
      imagen: sessionStorage.getItem('user.imagen'),
      correo: sessionStorage.getItem('user.correo')
    }
  }

}
