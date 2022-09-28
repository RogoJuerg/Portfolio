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
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTiltModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
