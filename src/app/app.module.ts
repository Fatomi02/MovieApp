import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { ComponentModule } from './Meal-Code/movie-code.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, ComponentModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
