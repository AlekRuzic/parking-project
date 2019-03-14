import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.css']
})
export class AdDetailComponent implements OnInit {
  @Input() selectedAd;

  constructor() {
   }

  ngOnInit() {
    console.log("selected ad is " + this.selectedAd);
    this.selectedAd.image = 'http://localhost:3000/' + this.selectedAd.image;
  }

}
