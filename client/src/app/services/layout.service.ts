import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  api_url

  constructor(private api:ServerService, private http:HttpClient) {
    this.api_url = api.API_URI+'menus';
  }

  getMenu(){
    return this.http.get(this.api_url);
  }

}
