import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import {FormGroup, FormControl, Validators } from '@angular/forms'
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styles: [
  ]
})
export class AdminCreateComponent implements OnInit {
  alert2:Boolean=false
  addPost = new FormGroup({
    title: new FormControl('', Validators.required),
    author_id: new FormControl('',Validators.required),
    image_url: new FormControl('',Validators.required),
    resume: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required)
  })
  constructor(private posts : PostsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  newPost(){
    this.posts.addUser(this.addPost.value).subscribe((result)=>
    {
      this.alert2=true
      this.addPost.reset()
  
    })
   
  }

}
