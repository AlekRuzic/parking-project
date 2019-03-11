import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdService } from '../services/ads.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@Component({
  selector: "app-create-ad",
  templateUrl: "./create-ad.component.html",
  styleUrls: ["./create-ad.component.css"],
  providers: [AdService, HttpClientModule]
})
export class CreateAdComponent implements OnInit {
  @Output() viewSelected = new EventEmitter<string>();

  constructor(private adService: AdService) {
  }

  getFormData(form: NgForm) {
    console.log(form);
    this.createAd(form);
  }

  createAd(formData: NgForm) {
    //console.log(formData.form.value);
    this.adService.newAd(formData.form.value)
      .subscribe(ads => {
        console.log('made it this far');
    });;
  }

  ngOnInit() {}

}
