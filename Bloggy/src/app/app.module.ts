import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PostsService } from './posts.service';
import { PostViewComponent } from './post-view/post-view.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostViewComponent,
    AdminHomepageComponent,
    AdminCreateComponent,
    AdminEditComponent,
    NotfoundComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [PostsService,{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorCatchingInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
