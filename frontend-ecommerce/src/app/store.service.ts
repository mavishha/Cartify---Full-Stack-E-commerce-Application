import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from './store';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private storeitemUrl="http://localhost:8082/store/getstore"
  private additemurl="http://localhost:8082/store/additem"
  private oneurl="http://localhost:8082/store/getoneitem/"
  private editurl="http://localhost:8082/store/edit/{id}"
  private deleteurl="http://localhost:8082/store/delete/"

  private loginurl="http://localhost:8082/loginuser"

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
    const url=this.editurl.replace("{id}",idvalue.toString());
    return this.http.put(url,data);
  }
  delete(idvalue:number){
    const url=this.deleteurl+idvalue;
     return this.http.delete(url);
  }

  userdetailsAuth(userdata:User){
    return this.http.post(this.loginurl,userdata);
  }
}
