import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OcultarpassPipe } from './pipes/ocultarpass.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    OcultarpassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      { provide: LOCALE_ID, useValue: 'es' },
      { provide: LOCALE_ID, useValue: 'fr' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
