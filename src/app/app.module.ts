import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './view/menu/menu.component';
import { PageNoteFoundedComponent } from './view/page-note-founded/page-note-founded.component';
import {AppRoutingModule,components} from "./app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
    components,
    MenuComponent,
    PageNoteFoundedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
