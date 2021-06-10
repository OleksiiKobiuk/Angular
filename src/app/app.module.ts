import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {RouterModule, Routes} from "@angular/router";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {UsersDeactivatorService} from "./services/users-deactivator.service";
import {PostsActivatorService} from "./services/posts-activator.service";
import { CommentsComponent } from './components/comments/comments.component';
import {CommentsResolveService} from "./services/comments-resolve.service";

let routes: Routes = [
  // render into app
  {
    path: 'users', component: UsersComponent,
    canDeactivate:[UsersDeactivatorService],
    children:
    // render to UsersComponent
      [{path: ':id', component: UserDetailsComponent}]
  },

  // render into app
  {path: 'posts', component: PostsComponent,
  canActivate:[PostsActivatorService]},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'comments', component: CommentsComponent, resolve:{xxx: CommentsResolveService}}

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
