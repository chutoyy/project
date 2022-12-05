import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';


const routes: Routes = [
  {
    path:"homepage",component: HomepageComponent,
  },
  {
    path:"posts/:id",component: PostViewComponent,
  },
  {
    path:"create",component: AdminCreateComponent,
  },
  {
    path:"admin",component: AdminHomepageComponent,
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
