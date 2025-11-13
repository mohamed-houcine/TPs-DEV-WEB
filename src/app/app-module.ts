import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Welcome } from './welcome/welcome';
import { Articles } from './articles/articles';
import { FormsModule } from '@angular/forms';
import { ListeProduit } from './liste-produit/liste-produit';

@NgModule({
  declarations: [
    App,
    Welcome,
    Articles,
    ListeProduit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
