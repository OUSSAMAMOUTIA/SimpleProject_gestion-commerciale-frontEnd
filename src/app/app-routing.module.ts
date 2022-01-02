import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommandeCreateComponent} from "./view/commandes/commande-create/commande-create.component";
import {CommandeListComponent} from "./view/commandes/commande-list/commande-list.component";
import {PageNoteFoundedComponent} from "./view/page-note-founded/page-note-founded.component";

export const components =[CommandeCreateComponent,CommandeListComponent]
const routes: Routes =[
  {path: '', component : components[1]},
  {path: 'commande-create', component : components[0]},
  {path: 'commande-list', component : components[1]},
  {path: 'commande-list/commande-create', component : components[0]},
  {path: '**', component : PageNoteFoundedComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
