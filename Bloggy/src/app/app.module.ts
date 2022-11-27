import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PostsService } from './posts.service';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
