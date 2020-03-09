import { Component, OnInit, OnDestroy } from '@angular/core';
import {SubSink} from 'subsink'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  subs = new SubSink;

  usuario={
    nombre:null,
    apellido:null,
    correo:null,
    password:null
  }
  mailMessage: string;

  constructor(protected userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  register(){
    console.log('registrando', this.usuario);
    if(this.validar())
      this.subs.sink = this.userService.registraUsuario(this.usuario).subscribe(
        res=>{
          alert(res['msg']);
          this.router.navigateByUrl('/login');
        }
      )
  }

  validar():boolean{
    if(this.usuario.nombre && this.usuario.nombre && this.validateEmail(this.usuario.correo))
      return true
  }

  validateEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        this.mailMessage = "El correo no es válido"
        return (true)
    }
    return (false)
  }

}
