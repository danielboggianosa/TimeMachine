import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  subs = new SubSink;
  usuario={
    correo:null,
    password:null,
  }
  @ViewChild('loginForm',{static:false}) loginForm;
  loginMessage: string;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  login(){
    console.log('validando');
    this.subs.sink = this.userService.login(this.usuario).subscribe(
      res=>{
        if(res['msg']=="autorizado"){
          sessionStorage.setItem('user.nombre', res['user'].nombre)
          sessionStorage.setItem('user.apellido', res['user'].apellido)
          sessionStorage.setItem('user.correo', res['user'].correo)
          sessionStorage.setItem('user.imagen', res['user'].imagen)
          if(sessionStorage.getItem('user.correo'))
            this.router.navigateByUrl('/dashboard');
        } 
        else
          this.loginMessage = "correo o contraseña incorrectos"

      }
    )
    this.loginForm.nativeElement.reset();
  }

}
