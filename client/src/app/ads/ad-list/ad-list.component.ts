import { Component, OnInit } from '@angular/core';
import { Ad } from '../ad.model';
import { AdService } from '../../services/ads.service';

@Component({
  selector: "app-ad-list",
  templateUrl: "./ad-list.component.html",
  styleUrls: ["./ad-list.component.css"]
})
export class AdListComponent implements OnInit {
  ads: Ad[] = [
    new Ad(
      "5c7ea50483e48393b07e739a",
      "126 sussex pl",
      "testing description",
      99,
      "images/test.jpg"
    ),
    new Ad(
      "5c7ea50483e48393b07e739a",
      "130 sussex pl",
      "description 2",
      150,
      "images/test.jpg"
    )
  ];


  constructor(private adService: AdService) {
    this.adService.getAds()
      .subscribe(ads => {
        // Populate ads array above with this JSON info
        console.log(ads);
      })
  }

  adsTest: Ad[] = [];
  ngOnInit() {}
}
