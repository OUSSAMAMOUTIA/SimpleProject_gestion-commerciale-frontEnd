import { Injectable } from '@angular/core';
import {Commande} from "../model/commande.model";
import {HttpClient} from "@angular/common/http";
import {Paiment} from "../model/paiment.model";
import {PaimentService} from "./paiment.service";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  // @ts-ignore
  private _commande: Commande;
  // @ts-ignore
  private _commandes: Array<Commande>;
  // @ts-ignore
  private _paiments: Array<Paiment>;
  // @ts-ignore
  private _paiment: Paiment;
  // @ts-ignore
  private _index: number ;
  private _urlBase ='http://localhost:8036/';
  private _urlSeccond ='gestion_commande/commande/';
  constructor(private http: HttpClient,private paimentService: PaimentService) { }

  public init(){
  this.http.get<Array<Commande>>(this._urlBase + this._urlSeccond).subscribe(
    data=>{
      this.commandes = data;
    },
    error => {
      console.log(error);
    }
  )
  }
  public update(commande:Commande, index: number){
        this.commande = this.clone(commande);
        this._index = index;
  }

  public save(){
    console.log(this.commande);
    if(this.commande.id == null){
      this.http.post<Array<Commande>>(this._urlBase + this._urlSeccond,this.commande).subscribe(
        data=>{
          // @ts-ignore
          if(data > 0){
            this.init();
          }
          else{
            alert('error lors de la creation commande '+data);
          }
        }
      );

    }
    else{
    console.log('hadi put');
    console.log(this.commande);
      this.http.put(this._urlBase+this._urlSeccond,this.commande).subscribe(
        data=>{
          this.commandes[this._index] = this.commande;
        }
      )
    }
    // @ts-ignore
  this.commande = null;
  }
  public delete(index: number, commande: Commande){
    this.http.delete<number>(this._urlBase +this._urlSeccond + 'reference/' + commande.reference).subscribe(
      data=>{
        if(data > 0){
          this.commandes.splice(index,1);
        }
        else{
          alert('error lors de la suppression commande '+data);
        }
      }
      )
  }
  public findCommandeByReference(commande:String, paiments: Array<Paiment>){
    this.http.get<Commande>(this._urlBase + this._urlSeccond + 'reference/' + commande).subscribe(
      data=>{
        console.log(data);
        this.commande = data;
        this.commande.paiments = new Array<Paiment>()
        for(let p of paiments){
          if(p.commande.reference == commande){
            this.commande.paiments.push(p);
            console.log(this.commande.paiments);
          }
        }

      }
    )
  }
  get paiments(): Array<Paiment> {
    if(this._paiments == null){
      this._paiments = new Array<Paiment>();
    }
    return this._paiments;
  }

  set paiments(value: Array<Paiment>) {
    this._paiments = value;
  }

  public clone(commande: Commande){
    let myClone = new Commande();
    myClone.id = commande.id;
    myClone.reference = commande.reference;
    myClone.total = commande.total;
    myClone.totalPayer = commande.totalPayer;
    myClone.paiments = commande.paiments;
    return myClone;
  }
  get commande(): Commande {
    if (this._commande == null){
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    if (this._commandes == null){
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }

  get paiment(): Paiment {
    if(this._paiment == null){
      this._paiment = new Paiment();
    }
    return this._paiment;
  }

  set paiment(value: Paiment) {
    this._paiment = value;
  }

  updatePaiment(paiment: Paiment, index: number) {
      this.paiment = this.paimentService.clone(paiment);
  }
}
