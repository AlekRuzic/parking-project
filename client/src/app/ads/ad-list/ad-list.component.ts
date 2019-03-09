import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ad } from '../ad.model';
import { AdService } from '../../services/ads.service';

@Component({
  selector: "app-ad-list",
  templateUrl: "./ad-list.component.html",
  styleUrls: ["./ad-list.component.css"]
})
export class AdListComponent implements OnInit {
  @Output() adWasSelected = new EventEmitter<{}>();
  ads: any = [];

  // Get Ads from database (using the adService)
  constructor(private adService: AdService) {
    this.adService.getAds().subscribe(adsData => {
      this.ads = adsData;
      console.log(this.ads);
    });
  }

  ngOnInit() {}

  onAdSelected(ad) {
    this.adWasSelected.emit(ad);
    console.log(ad);
  }
}
