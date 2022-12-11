import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url="http://100069.bloggy.ecole-it.devigne.space/posts/"
  url_author="http://100069.bloggy.ecole-it.devigne.space/authors/"

  constructor(private http:HttpClient) { }


  getPostsList():Observable<any>{
    return this.http.get<any>(this.url)

  }
  getAuthorsList():Observable<any>{
    return this.http.get<any>(this.url_author)
  }
  getPostId(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  getAuthorId(id:number){
    return this.http.get(`${this.url_author}/${id}`)
  }
  addUser(data: any){
    
    return this.http.post(this.url,data)
  }
  deletePost(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getPost(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  updatePost(id: number,data: any){
    return this.http.put (`${this.url}/${id}`,data)
   }
   
}