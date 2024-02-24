import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';\
import { CommunityExtension } from './community-extension';

@Injectable({
  providedIn: 'root'
})
export class CommunityExtensionService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/community-extension";

  displey(){
    return "Power vacuum!";
  }

  getAllCommex(){
    return this.http.get<CommunityExtension[]>(this.url);
  }
}
