import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { RecoverComponent } from './components/public/recover/recover.component';
import { UnknownComponent } from './components/public/unknown/unknown.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  // RUTAS PÚBLICAS
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'recover', component: RecoverComponent},
  // RUTAS PRIVADAS
  {path:'dashboard', component: LayoutComponent, 
  children:[
    {path:'', component: DashboardComponent},
    {path:'unknown', component: UnknownComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
