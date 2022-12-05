import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PostsService } from './posts.service';
import { PostViewComponent } from './post-view/post-view.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostViewComponent,
    AdminHomepageComponent,
    AdminCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
