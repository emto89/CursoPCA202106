import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';

registerLocaleData(localEs);

import { AppComponent } from './app.component';
import { CapitalizadaPipe } from './pipes/capitalizada.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue:'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
