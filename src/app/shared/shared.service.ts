import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private Http : HttpClient) { }

  postUser(data:any){
   return this.Http.post<any>("http://localhost:3000/usersList/", data);
  }
  getUser(){
   return this.Http.get<any>("http://localhost:3000/usersList/");
  }
  putUser(data:any, id:number){
    return this.Http.put<any>("http://localhost:3000/usersList/" +id, data);
  }
  deleteUser( id:number){
    return this.Http.delete<any>("http://localhost:3000/usersList/" +id);
  }
}
