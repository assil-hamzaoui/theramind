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
import { ConsultationsComponent } from './consultations/consultations.component';
import { MessagesComponent } from './messages/messages.component';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { SearchComponent } from './search/search.component';
import { SigndocComponent } from './signdoc/signdoc.component';
import { Page1Component } from './page1/page1.component';
import { SideComponent } from './side/side.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { RdvsComponent } from './rdvs/rdvs.component';
import { RdvlComponent } from './rdvl/rdvl.component';
import { HappyComponent } from './happy/happy.component';
import { SadComponent } from './sad/sad.component';
import { AideComponent } from './aide/aide.component';
import { DoctorComponent } from './doctors/doctors.component';


const routes: Routes = [
  { path: 'doctors', component: DoctorComponent },
  { path: '', component: SectionComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'forgetpass', component: ForgetPasswordComponent },
  { path: 'apropos', component: AproposComponent},
  { path: 'video', component: VideoComponent},
  { path: 'profil', component: ProfilComponent},
  {path: 'explore',component:ExploreComponent},
  {path:'consultations',component:ConsultationsComponent},
  {path:'messages',component:MessagesComponent},
  {path:'pricing-card',component:PricingCardComponent},
  {path:'footer', component:FooterComponent},
  {path:'search',component:SearchComponent},
  {path:'signdoc',component:SigndocComponent},
  {path:'page1',component:Page1Component},
  {path:'side',component:SideComponent},
  {path:'page2',component:Page2Component},
  {path:'page3',component:Page3Component},
  {path:'page4',component:Page4Component},
  {path:'page5',component:Page5Component},
  {path:'page6',component:Page6Component},
  {path:'page7',component:Page7Component},
  {path:'page8',component:Page8Component},
  {path:'page9',component:Page9Component},
  { path: 'rdvs', component: RdvsComponent },
  { path: 'rdvl', component: RdvlComponent },
  {path:'happy',component : HappyComponent},
  {path:'sad',component:SadComponent},
  {path:'aide', component: AideComponent},
  // Autres routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
