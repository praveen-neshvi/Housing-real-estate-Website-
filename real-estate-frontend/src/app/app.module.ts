import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavbarComponent } from './property/navbar/navbar.component';
import { HousingService } from './services/housing-service.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

// const appRoutes: Routes;

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavbarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,             //for teamplate forms
    ReactiveFormsModule,     //for reactive forms
    RouterModule.forRoot(
      [
        { path: '', component: PropertyListComponent },
        { path: 'rent-property', component: PropertyListComponent },
        { path: 'add-property', component: AddPropertyComponent },
        { path: 'add-property', component: AddPropertyComponent },
        { path: 'property-detail/:id', component: PropertyDetailComponent },
        { path: 'user/login', component: UserLoginComponent },
        { path: 'user/register', component: UserRegisterComponent },
      ]
    )
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
