import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AdDetailComponent } from './ads/ad-detail/ad-detail.component';
import { AdsComponent } from './ads/ads.component';
import { AdListComponent } from './ads/ad-list/ad-list.component';
import { AdTileComponent } from './ads/ad-list/ad-tile/ad-tile.component';
import { HeaderComponent } from './header/header.component';
import { CreateAdComponent } from './create-ad/create-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    AdDetailComponent,
    AdListComponent,
    AdTileComponent,
    HeaderComponent,
    AdsComponent,
    CreateAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
