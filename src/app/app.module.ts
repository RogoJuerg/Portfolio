import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopInfoComponent } from './top-info/top-info.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { AngularTiltModule } from 'angular-tilt';
import { MyWorkSectionComponent } from './my-work-section/my-work-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopInfoComponent,
    SkillsSectionComponent,
    MyWorkSectionComponent
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
