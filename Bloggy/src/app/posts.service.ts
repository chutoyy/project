import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url="http://100069.bloggy.ecole-it.devigne.space/posts/"
  url2="http://100069.bloggy.ecole-it.devigne.space/authors/"

  constructor(private http:HttpClient) { }


  getPostsList(){
    return this.http.get<any>(this.url)
  }
  getAuthorsList(){
    return this.http.get<any>(this.url2)
  }
  getPostId(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  getAuthorId(id:number){
    return this.http.get(`${this.url2}/${id}`)
  }

  addUser(data: any){
    
    return this.http.post(this.url,data)
  }


}