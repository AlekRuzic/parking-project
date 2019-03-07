import { Component, OnInit, Input } from '@angular/core';
import { Ad } from "../../ad.model";

@Component({
  selector: "app-ad-tile",
  templateUrl: "./ad-tile.component.html",
  styleUrls: ["./ad-tile.component.css"]
})
export class AdTileComponent implements OnInit {
  @Input() ad: Ad;

  constructor() {}

  ngOnInit() {}
}
