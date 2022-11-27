import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';


const routes: Routes = [
  {
    path:"homepage",component: HomepageComponent,
  },
  {
    path:"posts/:id",component: PostViewComponent,
  },
  {
    path:"", redirectTo:"homepage",pathMatch:"full"
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
