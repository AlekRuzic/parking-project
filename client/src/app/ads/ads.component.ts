import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  selectedAd;

  constructor() { }

  ngOnInit() {
  }

  // viewAd(selectedAd) {
  //   let recipeName = recipe.querySelector("div h4").innerText;
  //   let recipeDescription = recipe.querySelector("div p").innerText;
  //   let recipeImagePath = recipe.querySelector("span img").src;
  //   //let recipeImagePath = recipe.querySelector("")

  //   this.selectedRecipe = new Recipe(recipeName, recipeDescription, recipeImagePath);
  // }

}
