import { NgModule, CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component'; // Vérifie bien ce chemin
import { LoaderComponent } from './loader/loader.component';
import { SectionComponent } from './section/section.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ExploreComponent } from './explore/explore.component';
import { ForgetPasswordComponent } from './forgetpass/forgetpass.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AproposComponent } from './apropos/apropos.component';
import { VideoComponent } from './video/video.component';
import { ProfilComponent } from './profil/profil.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { PricingCardComponent } from './pricing-card/pricing-card.component';

@NgModule({
  imports: [CommonModule, FormsModule], // ✅ Import FormsModule
  declarations: [ForgetPasswordComponent],
  exports: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }


@NgModule({
  declarations: [
    AppComponent,
    CookieConsentComponent ,
    HeaderComponent,
    LoaderComponent,
    SectionComponent,
    SignInComponent,
    ExploreComponent,
    SignupComponent,
    MessagesComponent,
    AproposComponent,
    VideoComponent,
    ProfilComponent,
    DoctorComponent,
    ConsultationsComponent,
    PricingCardComponent




    // Assure-toi qu'il est bien là
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
// Ajout ici et non dans un autre @NgModule
})
export class AppModule { }
// app-routing.module.ts

