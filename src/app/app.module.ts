import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';
import { LoaderComponent } from './loader/loader.component';
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
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { SigndocComponent } from './signdoc/signdoc.component';
import { Page1Component } from './page1/page1.component';
import { SideComponent } from './side/side.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Pae7Component } from './pae7/pae7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { RdvsComponent } from './rdvs/rdvs.component';
import { RdvlComponent } from './rdvl/rdvl.component';
import { HappyComponent } from './happy/happy.component';
import { ExitedComponent } from './exited/exited.component';
import { SafePipe } from './safe.pipe';

import { SadComponent } from './sad/sad.component';

export class ForgetPasswordModule { }

@NgModule({
  declarations: [
    AppComponent,
    CookieConsentComponent,
    LoaderComponent,
    SignInComponent,
    ExploreComponent,
    SignupComponent,
    MessagesComponent,
    AproposComponent,
    VideoComponent,
    ProfilComponent,
    ConsultationsComponent,
    PricingCardComponent,
    FooterComponent,
    Page1Component,
    SearchComponent,
    AccountComponent,
    SigndocComponent,
    ForgetPasswordComponent,
    Pae7Component,
    Page8Component,
    Page9Component,
    RdvsComponent,
    RdvlComponent,
    HappyComponent,
    ExitedComponent,
    SafePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    SectionComponent,
    SideComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    HeaderComponent,
    DoctorComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
