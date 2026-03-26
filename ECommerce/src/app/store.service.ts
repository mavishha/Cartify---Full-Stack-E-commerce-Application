import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private storeitemUrl="http://localhost:8082/store/getstore"
  private additemurl="http://localhost:8082/store/additem"
  constructor(private http:HttpClient) { }
  fetchitems(){
    return this.http.get<Store[]>(this.storeitemUrl);
  }
  additem(data:Store){
    return this.http.post(this.additemurl,data);
  }
}
