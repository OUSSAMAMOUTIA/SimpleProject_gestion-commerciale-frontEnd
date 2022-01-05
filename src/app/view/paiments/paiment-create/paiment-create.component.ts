import { Component, OnInit } from '@angular/core';
import {PaimentService} from "../../../controller/service/paiment.service";
import {Paiment} from "../../../controller/model/paiment.model";
import {Commande} from "../../../controller/model/commande.model";
import {CommandeService} from "../../../controller/service/commande.service";

@Component({
  selector: 'app-paiment-create',
  templateUrl: './paiment-create.component.html',
  styleUrls: ['./paiment-create.component.css']
})
export class PaimentCreateComponent implements OnInit {

  constructor(private paimentService: PaimentService, private commandeService: CommandeService) { }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }

  public save(){
    return this.paimentService.save();
  }
  // @ts-ignore
  public oussama(): number{
    for(let x of this.commandes){
      if(x.reference == this.paiment.commande.reference){
        return x.total;
      }
    }
  }
  // @ts-ignore
  public oussama3(): boolean{
  let disabled=true;
    for(let x of this.commandes){
      if(x.reference == this.paiment.commande.reference){
        if(x.totalPayer + this.paiment.montant>x.total){
           disabled = false;
        }
      }
    }
    return disabled;
  }
  // @ts-ignore
  public oussama2(): number{
    for(let x of this.commandes){
      if(x.reference == this.paiment.commande.reference){
        return x.totalPayer+this.paiment.montant;
      }
    }
  }
  get commande(): Commande {
    return this.commandeService.commande;
  }
  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }
  public met(): Array<Commande>{
    let x = this.commandes;
    let y = new Array<Commande>();
    x.map(elemnt => {
      if(elemnt.total>elemnt.totalPayer){
      y.push(elemnt);
    }}
    )
    return y;
  }
  ngOnInit(): void {
    this.commandeService.init();
  }

}
