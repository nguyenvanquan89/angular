import { Component, OnInit } from '@angular/core';
import { AdService } from './components/ad.component/ad.service';
import { AdItem } from './components/ad.component/ad-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'input-output';
  currentItem = 'Television';


  //Temp items
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  //Delete items
  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}`);
  }

  // Advertiment 
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
