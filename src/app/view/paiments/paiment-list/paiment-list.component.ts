import { Component, OnInit } from '@angular/core';
import {PaimentService} from "../../../controller/service/paiment.service";
import {Commande} from "../../../controller/model/commande.model";
import {Paiment} from "../../../controller/model/paiment.model";

@Component({
  selector: 'app-paiment-list',
  templateUrl: './paiment-list.component.html',
  styleUrls: ['./paiment-list.component.css']
})
export class PaimentListComponent implements OnInit {
  public disabled = true;

  constructor(private paimentService: PaimentService) { }

  get paiments(): Array<Paiment> {
    return this.paimentService.paiments;
  }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  public delete(index: number,paiment:Paiment){
    this.paimentService.delete(index,paiment);
  }
  public update(paiment:Paiment, index: number){
    return this.paimentService.update(paiment, index);
  }
  public findPaimentByCode(paiment:String){
    this.disabled =false;
    return this.paimentService.findPaimentByCode(paiment);
  }
  ngOnInit(): void {
    this.paimentService.init();
  }

}
