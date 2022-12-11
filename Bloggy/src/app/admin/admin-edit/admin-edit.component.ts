import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styles: [
  ]
})
export class AdminEditComponent implements OnInit {
  alert2:Boolean=false
  editPost = new FormGroup({
    title: new FormControl(''),
    author_id: new FormControl(''),
    image_url: new FormControl(''),
    resume: new FormControl(''),
    content: new FormControl('')
  })
  constructor(private router: ActivatedRoute, private post : PostsService) { }

  ngOnInit(): void {
    this.post.getPost(this.router.snapshot.params['id']).subscribe((result:any)=>
    {
     
      this.editPost = new FormGroup({
        title: new FormControl(result['title']),
        author_id: new FormControl(result['author_id']),
        image_url: new FormControl(result['image_url']),
        resume: new FormControl(result['resume']),
        content: new FormControl(result['content'])
      })
    })
  }
    updatePost(){
      this.post.updatePost(this.router.snapshot.params['id'],this.editPost.value).subscribe((result:any)=>{
        this.alert2=true
        this.editPost.reset()
      })
    }
  


}
