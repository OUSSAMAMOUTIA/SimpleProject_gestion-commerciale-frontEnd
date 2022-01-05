import {Commande} from "./commande.model";

export class Paiment {
  // @ts-ignore
  public id:number;
  // @ts-ignore
  public code:string;
  // @ts-ignore
  public montant: number;
  // @ts-ignore
  public datePaiment:Date;
  // @ts-ignore
  public commande  = new Commande();

  constructor() {
    this.montant = 0;
  }
}
