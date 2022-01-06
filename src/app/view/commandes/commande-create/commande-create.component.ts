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
  // @ts-ignore
  private _index: number;
  public disable=true;
  constructor(private commandeService: CommandeService, private paimentService: PaimentService) { }
  get commande(): Commande {
    return this.commandeService.commande;
  }
  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }
  public delete(index:number){
    this.paiments.splice(index,1);
  }
  public save(){
    this.commande.reference = 'cmd-'+(this.commandes.length+1);
    console.log(this.commande.paiments);
    return this.commandeService.save();
  }
  public disabled():boolean{
    let disabled=true;
    if( this.commande.total!= null &&this.commande.totalPayer!= null ){
       disabled =false;
    }
    return disabled;
  }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  get paiments(): Array<Paiment> {
    return this.paimentService.paiments;
  }
  set paiment(value: Paiment) {
    this.paimentService.paiment = value;
  }
  set paiments(value: Array<Paiment>) {
    this.paimentService.paiments = value;
  }
  // @ts-ignore
  public addPaiment(){
    this.disable =false;
    if(this.paiment.id == null){
      this.paiment.id = this.paiments.length+1;
      this.commande.reference = 'cmd-'+(this.commandes.length+1);
      this.paiment.code = this.commande.reference +'-pai-'+this.paiment.id;
      this.commande.paiments.push(this.paimentService.clone(this.paiment));
      this.paiments.push(this.paimentService.clone(this.paiment));
    }
    else{
      this.commande.paiments.push(this.paiment);
      this.paiments[this._index] = this.paimentService.clone(this.paiment);
    }
    // @ts-ignore
    this.paiment = null;
  }
  ngOnInit(): void {
    this.commandeService.init();
  }


  updatePaiment(paiment:Paiment, index:number) {
    this.paiment = this.paimentService.clone(paiment);
    this._index =index;
  }
}
