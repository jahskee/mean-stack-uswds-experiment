import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_common/header/header.component';
import { FooterComponent } from './_common/footer/footer.component';

import { AddContactFormComponent } from './public/crud/add-contact-form/add-contact-form.component';
import { ContactListComponent } from './public/crud/contact-list/contact-list.component';
import { Page2Component } from './public/page2/page2.component';

import { CrudService } from './services/crud.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './public/signin/signin.component';
import { ServicepageComponent } from './public/servicepage/servicepage.component';
import { PasswordResetComponent } from './public/password-reset/password-reset.component';
import { HomeComponent } from './public/home/home.component';
import { CrudComponent } from './public/crud/crud.component';
import { SignupComponent } from './public/signup/signup.component';
import { ContactusComponent } from './public/contactus/contactus.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'service', component: ServicepageComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'page2/:contactId', component: Page2Component },
  { path: 'passwordreset', component: PasswordResetComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
  //{ path: '', component: RegisterComponent },
  //{ path: '**', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddContactFormComponent,
    ContactListComponent,
    Page2Component,
    SigninComponent, 
    ServicepageComponent, 
    PasswordResetComponent,
    HomeComponent,
    CrudComponent,
    SignupComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }