import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdService {
  constructor(private http: HttpClient) {
    console.log('Ad Service Initialized');
  }

  getAds() {
    return this.http.get('http://localhost:3000/');
  }
}
