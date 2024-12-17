import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor( private htpp : HttpClient) { }
  get(url:string){
    return this.htpp.get(url)
  }
}
