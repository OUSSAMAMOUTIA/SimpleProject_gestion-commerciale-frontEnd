import { Component, OnInit } from '@angular/core';
import {Commande} from "../../../controller/model/commande.model";
import {CommandeService} from "../../../controller/service/commande.service";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }
  public delete(index: number){
    this.commandes.splice(index,1);
  }
  public update(commande:Commande, index: number){
    return this.commandeService.update(commande, index);
  }
  ngOnInit(): void {
    this.commandeService.init();
  }

}
