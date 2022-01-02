import { Component, OnInit } from '@angular/core';
import {Commande} from "../../../controller/model/commande.model";
import {CommandeService} from "../../../controller/service/commande.service";

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }
  get commande(): Commande {
    return this.commandeService.commande;
  }
  public save(){
    return this.commandeService.save();
  }
  ngOnInit(): void {
  }


}
