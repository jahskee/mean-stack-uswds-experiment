import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './customer/public/header/header.component';
import { FooterComponent } from './customer/public/footer/footer.component';

import { Page1Component } from './customer/public/page1/page1.component';
import { AddContactFormComponent } from './customer/public/page1/add-contact-form/add-contact-form.component';
import { ContactListComponent } from './customer/public/page1/contact-list/contact-list.component';
import { Page2Component } from './customer/public/page2/page2.component';

import { ContactService } from './services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './customer/public/register/register.component';
import { SigninComponent } from './customer/public/signin/signin.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'page2/:contactId', component: Page2Component },
  { path: '', component: Page1Component },
  { path: '**', component: Page1Component },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddContactFormComponent,
    ContactListComponent,
    Page1Component,
    Page2Component,
    RegisterComponent,   
    SigninComponent
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