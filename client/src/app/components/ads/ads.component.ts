import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  constructor(private adService: AdService) {
      this.adService.getAds()
        .subscribe(ads => {
          console.log(ads);
        })
   }

  ngOnInit() {

  }

}
