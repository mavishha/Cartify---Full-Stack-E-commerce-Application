import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private storeitemUrl="http://localhost:8082/store/getstore"
  private additemurl="http://localhost:8082/store/additem"
  private oneurl="http://localhost:8082/store/getoneitem/"
  private editurl="http://localhost:8082/store/edit/"
  constructor(private http:HttpClient) { }
  fetchitems(){
    return this.http.get<Store[]>(this.storeitemUrl);
  }
  additem(data:Store){
    return this.http.post(this.additemurl,data);
  }
  oneitem(idvalue:number){
    return this.http.get<Store>(this.oneurl+idvalue);
  }
  edit(idvalue:number,data:Store){
    return this.http.put(this.editurl+idvalue,data);
  }
}
