import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './view/menu/menu.component';
import { PageNoteFoundedComponent } from './view/page-note-founded/page-note-founded.component';
import {AppRoutingModule,components} from "./app-routing.module";
import { PaimentsComponent } from './view/paiments/paiments.component';
import { PaimentCreateComponent } from './view/paiments/paiment-create/paiment-create.component';
import { PaimentListComponent } from './view/paiments/paiment-list/paiment-list.component';
@NgModule({
  declarations: [
    AppComponent,
    components,
    MenuComponent,
    PageNoteFoundedComponent,
    PaimentsComponent,
    PaimentCreateComponent,
    PaimentListComponent
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
