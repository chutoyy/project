import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import {Router} from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styles: [
  ]
})
export class AdminHomepageComponent implements OnInit, OnDestroy {
  postList:any={}
  posts:any={}
  constructor(private post: PostsService, private router: Router ) { }
  sub:Subscription=new Subscription()

  ngOnInit(): void {
    let list = this.post.getPostsList().subscribe((result)=>
    {
      this.postList=result
    })
    this.sub.add(list)
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  List(){
    let liste = this.post.getPostsList().subscribe((result)=>
    {
      console.table(result)
    })
    this.sub.add(liste)
}
}
