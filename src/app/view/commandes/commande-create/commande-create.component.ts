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

  constructor(private commandeService: CommandeService, private paimentService: PaimentService) { }
  get commande(): Commande {
    return this.commandeService.commande;
  }
  public delete(index:number){
    this.paiments.splice(index,1);
  }
  public save(){
    console.log(this.commande.paiments);
    return this.commandeService.save();
  }
  public disabled():boolean{
    let disabled=true;
    if(this.commande.reference!= null && this.commande.total!= null &&this.commande.totalPayer!= null ){
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
  // @ts-ignore
  public addPaiment(){
    if(this.paiment.id == null){
      this.paiment.id = this.paiments.length+1;
      console.log(this.paiment.id);
      this.commande.paiments.push(this.paiment);
      this.paiments.push(this.paimentService.clone(this.paiment));
    }
    else{
      console.log('hna else'+this.paiment.code);
      this.commande.paiments.push(this.paiment);
      this.paiments[this._index] = this.paimentService.clone(this.paiment);
    }
    // @ts-ignore
    this.paiment = null;
  }
  ngOnInit(): void {
  }


  updatePaiment(paiment:Paiment, index:number) {
    this.paiment = this.paimentService.clone(paiment);
    this._index =index;
  }
}
