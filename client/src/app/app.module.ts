import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_common/header/header.component';
import { FooterComponent } from './_common/footer/footer.component';

import { AddContactFormComponent } from './public/home/add-contact-form/add-contact-form.component';
import { ContactListComponent } from './public/home/contact-list/contact-list.component';
import { Page2Component } from './public/page2/page2.component';

import { ContactService } from './services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './public/register/register.component';
import { SigninComponent } from './public/signin/signin.component';
import { ServicepageComponent } from './public/servicepage/servicepage.component';
import { PartnersComponent } from './public/partners/partners.component';
import { ContactComponent } from './public/contact/contact.component';
import { PasswordResetComponent } from './public/password-reset/password-reset.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServicepageComponent },
  { path: 'page2/:contactId', component: Page2Component },
  { path: 'passwordreset', component: PasswordResetComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddContactFormComponent,
    ContactListComponent,
    Page2Component,
    RegisterComponent,   
    SigninComponent, 
    ServicepageComponent, 
    PartnersComponent,    
    ContactComponent, 
    PasswordResetComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }