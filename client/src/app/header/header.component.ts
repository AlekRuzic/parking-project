import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() viewSelected = new EventEmitter<string>();

  onSelect(view: string) {
    this.viewSelected.emit(view);
  }

  constructor() {
   }

  ngOnInit() {
  }

}
