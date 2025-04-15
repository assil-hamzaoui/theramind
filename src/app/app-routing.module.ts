// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forgetpass/forgetpass.component';
import { AproposComponent } from './apropos/apropos.component';
import { VideoComponent } from './video/video.component';
import { ProfilComponent } from './profil/profil.component';
import { ExploreComponent } from './explore/explore.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { MessagesComponent } from './messages/messages.component';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: SectionComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'forgetpass', component: ForgetPasswordComponent },
  { path: 'apropos', component: AproposComponent},
  { path: 'video', component: VideoComponent},
  { path: 'profil', component: ProfilComponent},
  {path: 'explore',component:ExploreComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'consultations',component:ConsultationsComponent},
  {path:'messages',component:MessagesComponent},
  {path:'pricing-card',component:PricingCardComponent},
  {path:'footer', component:FooterComponent},
  {path:'search',component:SearchComponent}




  // Autres routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
