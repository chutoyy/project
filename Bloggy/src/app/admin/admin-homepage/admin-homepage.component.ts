import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PostsService } from '../../posts.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styles: [
  ]
})
export class AdminHomepageComponent implements OnInit, OnDestroy {
  postList: any = []
  auteursList: any = []
 

  constructor(public post: PostsService, private router: Router) { }
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
    let liste = this.post.getPostsList().subscribe((result) => {
      console.table(result)
    })
    this.sub.add(liste)
  }
  goToAddForm() {
    this.router.navigate(['/create']);
  }
  goToAdminHomepage() {
    this.router.navigate(['/admin']);
  }
  deletePost(post: any) {
    this.postList = this.postList.filter((p: any) => p !== post);
    this.post.deletePost(post.id).subscribe();
  }
  getAuthorNameById(post: any) {
    return this.auteursList.find((a: any) => a.id === +post.author_id)?.full_name
  }

  confirmation(post: any) {
    let titre = prompt("Warning! You have attempted to delete " + post.title + ". Type the name of the item below and press the Ok button to continue or press cancel to cancel the operation ", "");
    if (titre == post.title) {
      this.deletePost(post)
      alert("Vous avez supprimé " + post.title)
    }
    else {}
  }



}

