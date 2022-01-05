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
  get paiments(): Array<Paiment> {
    return this.paimentService.paiments;
  }
  public save(){
    console.log(this.commande);
    console.log('haha'+this.paiments);
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
}
