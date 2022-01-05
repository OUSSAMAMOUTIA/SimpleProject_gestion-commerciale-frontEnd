import { Component, OnInit } from '@angular/core';
import {Commande} from "../../../controller/model/commande.model";
import {CommandeService} from "../../../controller/service/commande.service";
import {PaimentService} from "../../../controller/service/paiment.service";
import {Paiment} from "../../../controller/model/paiment.model";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  constructor(private commandeService: CommandeService,private paimentService: PaimentService) { }

  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }
  get paiments(): Array<Paiment> {
    return this.paimentService.paiments;
  }
  public delete(index: number, commande:Commande){
    this.commandes.splice(index,1);
    return this.commandeService.delete(index,commande);
  }
  public update(commande:Commande, index: number){
    console.log('hadi update');
      for(let x of this.paiments){
        if(x.commande.reference == commande.reference){
          console.log('hna west la condition ' +x);
          commande.paiments.push(x);
        }else{
          console.log('hna bra la condition');
          commande.paiments = new Array<Paiment>();
        }
      }
    console.log(commande.paiments);
    return this.commandeService.update(commande, index);
  }
  ngOnInit(): void {
    this.commandeService.init();
    this.paimentService.init();
  }

}
