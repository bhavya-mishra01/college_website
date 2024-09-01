import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutsbitComponent } from './aboutsbit/aboutsbit.component';
import { CoursesComponent } from './courses/courses.component';
import { ImageslidingComponent } from './imagesliding/imagesliding.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { Marquee1Component } from './marquee1/marquee1.component';
import { Marquee2Component } from './marquee2/marquee2.component';
import { BoxesComponent } from './boxes/boxes.component';
import { LogosComponent } from './logos/logos.component';
import { FterComponent } from './fter/fter.component';
import { AluminiComponent } from './alumini/alumini.component';
import { AdmissionComponent } from './admission/admission.component';
import { StudentDeskComponent } from './student-desk/student-desk.component';

import { AboutComponent } from './about/about.component';
import { AprovalComponent } from './aproval/aproval.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { FaqComponent } from './faq/faq.component';
import { FeestructureComponent } from './feestructure/feestructure.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatbotService } from './chatbot.service';
import { VcDeskComponent } from './vc-desk/vc-desk.component';
import { AlumniRegistrationComponent } from './alumni-registration/alumni-registration.component';
import { AlumniService } from './alumni.service';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'aproval', component: AprovalComponent },
  { path: 'student-desk', component: StudentDeskComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'feestructure', component: FeestructureComponent },
  { path: 'career', component: CareerComponent },
  { path: 'alumni-registration', component: AlumniRegistrationComponent },
  { path: 'vc-desk', component: VcDeskComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'programs', component: CoursesComponent },
  { path: 'reservation', component: ReservationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    AboutsbitComponent,
    CoursesComponent,
    ImageslidingComponent,
    FacilitiesComponent,
    Marquee1Component,
    Marquee2Component,
    BoxesComponent,
    LogosComponent,
    FterComponent,
    AluminiComponent,
    AdmissionComponent,
    StudentDeskComponent,
    AboutComponent,
    AprovalComponent,
    HomeComponent,
    CareerComponent,
    FaqComponent,
    FeestructureComponent,
    ChatbotComponent,
    AlumniRegistrationComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AlumniService, ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
