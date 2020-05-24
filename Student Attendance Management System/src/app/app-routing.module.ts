import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"",component:LoginComponent},  
{path:"login",component:LoginComponent},
{path:"welcome/:username",component:WelcomeComponent},
{path:"display",component:DisplayDataComponent},
{path:"logout",component:LogoutComponent},
{path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
