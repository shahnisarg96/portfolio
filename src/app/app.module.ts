import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
