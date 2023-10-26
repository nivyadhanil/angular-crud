import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { User  } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url:string ='http://127.0.0.1:8000/api/register'
  url2:string ='http://127.0.0.1:8000/api/register/'
  getUserDetails(){
    return this.http.get<User[]>(this.url)
  }
  deleteUser(id : any){

    return this.http.delete(this.url2+id)
  }
  createUser(user : any){
    return this.http.post(this.url , user)
  }

}
