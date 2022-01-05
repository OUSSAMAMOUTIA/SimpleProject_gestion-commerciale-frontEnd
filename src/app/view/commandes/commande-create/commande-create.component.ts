import { Component, OnInit } from '@angular/core';
import {Commande} from "../../../controller/model/commande.model";
import {CommandeService} from "../../../controller/service/commande.service";
import {Paiment} from "../../../controller/model/paiment.model";
import {PaimentService} from "../../../controller/service/paiment.service";

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit {

  constructor(private commandeService: CommandeService, private paimentService: PaimentService) { }
  get commande(): Commande {
    return this.commandeService.commande;
  }
  public save(){
    this.commande.paiments.push(this.paiment);
    console.log(this.commande.paiments);
    return this.commandeService.save();
  }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  get paiments(): Array<Paiment> {
    return this.paimentService.paiments;
  }
  ngOnInit(): void {
  }


}
