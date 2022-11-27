import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { map, mergeMap, of, Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styles: [
  ]
})
export class PostViewComponent implements OnInit, OnDestroy {
  postList:any={}
  posts:any={}
  sub:Subscription = new Subscription()
  constructor(private router: Router, private route: ActivatedRoute, private post: PostsService) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      mergeMap((mapp => {
        let id = mapp.get('id')
        if(id != null){
          return this.post.getPostId(parseInt(id))
          
          
        } else {
          return of()
        }
        }))
    ).subscribe((result)=>
    {
      this.posts=result
      console.log(result)
    })}

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  

 
  goToPostList(){
    this.router.navigate(['/homepage']);
  }
}
