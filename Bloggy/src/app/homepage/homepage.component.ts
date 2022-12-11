import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit, OnDestroy {
  postList: any = []
  posts: any = []
  auteursList: any = []
  constructor(private post: PostsService, private router: Router) { }
  sub: Subscription = new Subscription()
  ngOnInit(): void {
    let list = this.post.getPostsList().subscribe((result) => {
      
      this.postList = result

    })
    let authors = this.post.getAuthorsList().subscribe((result) => {

      this.auteursList = result
      
    })
    this.sub.add(authors)
    this.sub.add(list)
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()

  }



  List() {
    let post = this.post.getPostsList().subscribe((result) => {
      console.table(result)
    })
    this.sub.add(post)
  }
  goToPost() {
    this.router.navigate(['/posts', this.posts.id])
  }

  getAuthorNameById(post: any) {
    return this.auteursList.find((a: any) => a.id === +post.author_id)?.full_name

  }

}  
