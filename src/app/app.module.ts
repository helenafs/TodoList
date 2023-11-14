import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,//aplicattion web
    ReactiveFormsModule // pour faire le formulaire dans l'HTML
  ],
  providers: [],//pour les composants
  bootstrap: [AppComponent]//composant que vais initialiser
})

export class AppModule { }
