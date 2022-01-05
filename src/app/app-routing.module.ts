import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommandeCreateComponent} from "./view/commandes/commande-create/commande-create.component";
import {CommandeListComponent} from "./view/commandes/commande-list/commande-list.component";
import {PageNoteFoundedComponent} from "./view/page-note-founded/page-note-founded.component";
import {PaimentCreateComponent} from "./view/paiments/paiment-create/paiment-create.component";
import {PaimentListComponent} from "./view/paiments/paiment-list/paiment-list.component";

export const components =[CommandeCreateComponent,CommandeListComponent,PaimentCreateComponent,PaimentListComponent]
const routes: Routes =[
  {path: '', component : components[1]},
  {path: 'commande-create', component : components[0]},
  {path: 'commande-list', component : components[1]},
  {path: 'commande-list/commande-create', component : components[0]},
  {path: 'paiment-create', component : components[2]},
  {path: 'paiment-list', component : components[3]},
  {path: 'paiment-list/paiment-create', component : components[2]},
  {path: '**', component : PageNoteFoundedComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
