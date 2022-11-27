import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription} from 'rxjs'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit, OnDestroy {
  postList:any={}
  posts:any={}
  auteursList:any={}
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
    let auteur = this.post.getPostsList().subscribe((result)=>
    {
      console.table(result)
    })
    this.sub.add(auteur)
}
  goToPost(){
    this.router.navigate(['/posts', this.posts.id])
  }
  

}