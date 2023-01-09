import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopInfoComponent } from './top-info/top-info.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { AngularTiltModule } from 'angular-tilt';
import { MyWorkSectionComponent } from './my-work-section/my-work-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopInfoComponent,
    SkillsSectionComponent,
    MyWorkSectionComponent,
    AboutMeSectionComponent,
    ContactMeSectionComponent,
    FooterComponent,
    ImprintComponent,
    MainPageComponent,
    LegalNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTiltModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
