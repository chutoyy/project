import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { NotfoundComponent } from './notfound/notfound.component';
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
    path:"edit/:id",component:AdminEditComponent,
  },
  {
    path:"", redirectTo:"homepage",pathMatch:"full"
  },
  {
    path:"**",pathMatch:"full", component:NotfoundComponent
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
