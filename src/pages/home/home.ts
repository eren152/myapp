import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { BbqPage } from '../bbq/bbq';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items : any[];
  
  constructor(public navCtrl: NavController) {
    this.items=[];
    for (let index = 0; index < 10; index++) {
      this.items.push({
        text:'Item'+ index,
        id : index
      });
    }

  }

  itemSelected(item){
    this.navCtrl.push(BbqPage,{
      item:item
    });
  }

}
