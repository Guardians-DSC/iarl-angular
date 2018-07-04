import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DeskboardComponent } from './deskboard/deskboard.component';
import { AuthGuard } from './_guards/auth.guard';
import {FileManagerComponent} from './file-manager/file-manager.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'deskboard', component: DeskboardComponent, canActivate: [ AuthGuard ] },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'file', component: FileManagerComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
