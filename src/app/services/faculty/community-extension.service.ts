import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunityExtension } from './community-extension';
import { schedule } from '../admin/schedule';

@Injectable({
  providedIn: 'root'
})
export class CommunityExtensionService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/commex";

  displey(){
    return "Power vacuum!";
  }

  getAllCommex(){
    return this.http.get<CommunityExtension[]>(this.url);
  }
}
