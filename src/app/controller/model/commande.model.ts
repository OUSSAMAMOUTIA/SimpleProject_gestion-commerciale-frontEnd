import {Paiment} from "./paiment.model";

export class Commande {
  // @ts-ignore
  public id:number;
  // @ts-ignore
  public reference:string;
  // @ts-ignore
  public total: number;
  // @ts-ignore
  public totalPayer:number;
// @ts-ignore
  public paiments = new Array<Paiment>();
}
