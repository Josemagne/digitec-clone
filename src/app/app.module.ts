import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [CommonModule, BrowserModule, HeaderModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
