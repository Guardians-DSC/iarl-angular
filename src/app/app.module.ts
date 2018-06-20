import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Project imports
import { AppRoutingModule } from './/app-routing.module';
import { DeskboardComponent } from './deskboard/deskboard.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './_guards/auth.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './_services/auth.service';
import { HttpModule } from '@angular/http';

import { ToastrModule } from 'ngx-toastr';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    DeskboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
