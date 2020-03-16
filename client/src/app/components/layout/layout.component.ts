import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { LayoutService } from 'src/app/services/layout.service';
import { SubSink } from 'subsink';
import { Menu } from 'src/app/models/Menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {
  subs = new SubSink
  @ViewChild('sidebar') sidebar;
  webTitulo="TimeMachine"
  user:Usuario
  menu:Menu

  constructor(private layout:LayoutService){ }

  ngOnInit(): void {
    this.user={
      id:+sessionStorage.getItem('user.id'),
      nombre:sessionStorage.getItem('user.nombre'),
      apellido:sessionStorage.getItem('user.apellido'),
      imagen:sessionStorage.getItem('user.imagen'),
      correo:sessionStorage.getItem('user.correo'),
      rol:+sessionStorage.getItem('user.rol')
    }
    this.getMenu()
  }

  toggleSideBar(){
    this.sidebar.toggle()
  }
  
  public update(user:Usuario){
    this.user = user;
    sessionStorage.setItem('user.imagen',user.imagen)
  }

  getMenu(){
    this.subs.sink = this.layout.getMenu().subscribe(res=>this.menu = res['data'])
  }

}
