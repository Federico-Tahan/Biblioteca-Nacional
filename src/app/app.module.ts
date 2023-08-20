import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BibliotecaTitleComponent } from './biblioteca-title/biblioteca-title.component';
import { LibroComponent } from './libro/libro.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaTitleComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
