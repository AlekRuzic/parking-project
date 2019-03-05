import { Component } from '@angular/core';
import { AdService } from './services/ads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AdService]
})
export class AppComponent {
  title = 'client';
}
