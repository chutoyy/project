import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { map, mergeMap, of, Subscription } from 'rxjs';
import { PostsService } from '../posts.service';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styles: [
  ]
})
export class PostViewComponent implements OnInit, OnDestroy {
  postList:any=[]
  posts:any=[]
  auteursList:any=[]
  error:string
  sub:Subscription = new Subscription()
  constructor(private router: Router, private route: ActivatedRoute, private post: PostsService) {
    let author = this.post.getAuthorsList().subscribe((result)=>
    {
      this.auteursList=result
      console.log(result)
    })
   }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      mergeMap((mapp => {
        let id = mapp.get('id')
        if(id != null){
          return this.post.getPostId(parseInt(id))        
        }
        else {
          return of()
        }
        }))
    ).subscribe((result)=>
    {
      this.posts=result
    }),(error: string)=>{
      console.log(error)
      this.error=error
    }}

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  getAuthorNameById(post:any){
    return this.auteursList.find((a:any)=> a.id === +post.author_id)?.full_name
  
  }
  goToPostList(){
    this.router.navigate(['/homepage']);
  }
}
