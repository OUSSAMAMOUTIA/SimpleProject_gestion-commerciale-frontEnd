import { Injectable } from '@angular/core';
import {Paiment} from "../model/paiment.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PaimentService {
  // @ts-ignore
    private _paiment: Paiment;
  // @ts-ignore
    private _paiments: Array<Paiment>;
  // @ts-ignore
  private _x: Array<Paiment>;
  // @ts-ignore
  private _index: number ;
  private _urlBase ='http://localhost:8036/';
  private _urlSeccond ='gestion_commande/paiment/';
  constructor(private http: HttpClient) { }

  public init(){
    this.http.get<Array<Paiment>>(this._urlBase + this._urlSeccond).subscribe(
      data=>{
        this.paiments = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  public update(paiment:Paiment, index: number){
    this.paiment = this.clone(paiment);
    this._index = index;
  }
  public delete(index: number, paiment:Paiment){
    console.log(paiment.code);
    this.http.delete<number>(this._urlBase+this._urlSeccond+'code/'+paiment.code).subscribe(
      data=>{
        if(data>0){
          this.paiments.splice(index,1);
        }else{
          console.log('error lors de la suppression du paiment');
        }
      }
    )
  }


  public findPaimentByCode(paiment:String){
    this.http.get<Paiment>(this._urlBase + this._urlSeccond + 'code/' + paiment).subscribe(
      data=>{
       this.paiment = data;
      }
    )
  }
  public save(){
    if(this.paiment.id == null){
      this.http.post<Array<Paiment>>(this._urlBase + this._urlSeccond ,this.paiment).subscribe(
        data=>{
          // @ts-ignore
          if(data > 0){
            console.log('here is data '+ data);
            this.init();
          }
          else{
            alert('error lors de la creation commande '+data);
          }
        }
      );

    }
    else{
      // @ts-ignore
      this.http.put(this._urlBase+this._urlSeccond,this.paiment).subscribe(
        data=>{
          this.paiments[this._index]=this.paiment;
        }
      )

    }
    // @ts-ignore
    this.paiment = null;
  }
  public clone(paiment: Paiment){
    let myClone = new Paiment();
    myClone.id = paiment.id;
    myClone.code = paiment.code;
    myClone.montant = paiment.montant;
    myClone.datePaiment = paiment.datePaiment;
    myClone.commande = paiment.commande;
    return myClone;
  }
  get paiment(): Paiment {
    if (this._paiment == null) {
      this._paiment = new Paiment();
    }
    return this._paiment;
  }

  set paiment(value: Paiment) {
    this._paiment = value;
  }

  get paiments(): Array<Paiment> {
    if (this._paiments == null) {
      this._paiments = new Array<Paiment>();
    }
    return this._paiments;
  }

  set paiments(value: Array<Paiment>) {
    this._paiments = value;
  }
}
