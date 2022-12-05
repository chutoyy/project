import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import {FormGroup, FormControl, Validators } from '@angular/forms'
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styles: [
  ]
})
export class AdminCreateComponent implements OnInit {
  addPost = new FormGroup({
    title: new FormControl(''),
    author_id: new FormControl(''),
    image_url: new FormControl(''),
    resume: new FormControl(''),
    content: new FormControl('')
  })
  constructor(private posts : PostsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  newPost(){
    this.posts.addUser(this.addPost.value).subscribe((result)=>
    {
      console.table(result)
    })}
}
