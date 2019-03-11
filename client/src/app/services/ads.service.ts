import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class AdService {
  constructor(private http: HttpClient) {
    console.log('Ad Service Initialized');
  }

  getAds() {
    return this.http.get('http://localhost:3000/');
  }

  newAd(formData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/createad', formData, httpOptions);
  }
}
