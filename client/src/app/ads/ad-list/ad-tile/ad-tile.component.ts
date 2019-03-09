import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-ad-tile",
  templateUrl: "./ad-tile.component.html",
  styleUrls: ["./ad-tile.component.css"]
})
export class AdTileComponent implements OnInit {
  @Input() ad;
  @Output() adSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSelected(ad) {
    this.adSelected.emit();
  }
}
