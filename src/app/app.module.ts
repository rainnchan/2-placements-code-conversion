import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { LetterConversionComponent } from './letter-conversion/letter-conversion.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslationComponent } from './translation/translation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    LetterConversionComponent,
    NavbarComponent,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
