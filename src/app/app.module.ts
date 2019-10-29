import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { JphUsersService } from "./services/jph-users.service";
import { JsonUsersService } from "./services/json-users.service";
import { JphPostsService } from "./services/jph-posts.service";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { JsonUsersComponent } from "./components/json-users/json-users.component";
import { LoginComponent } from "./components/login/login.component";
import { PostsComponent } from "./components/posts/posts.component";
import { JphUsersComponent } from "./components/jph-users/jph-users.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { GithubFollowersComponent } from "./components/github-followers/github-followers.component";
import { GithubFollowerProfileComponent } from "./components/github-follower-profile/github-follower-profile.component";
import { GithubFollowersService } from "./services/github-followers.service";
import { TinyHomeComponent } from "./components/tiny-home/tiny-home.component";
import { LocalUsersComponent } from "./components/local-users/local-users.component";
import { LocalUsersCreateComponent } from "./components/local-users-create/local-users-create.component";
import { LocalUsersShowComponent } from "./components/local-users-show/local-users-show.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsonUsersComponent,
    LoginComponent,
    PostsComponent,
    JphUsersComponent,
    NavbarComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    GithubFollowerProfileComponent,
    TinyHomeComponent,
    LocalUsersComponent,
    LocalUsersCreateComponent,
    LocalUsersShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "json-users", component: JsonUsersComponent },
      { path: "jph-users", component: JphUsersComponent },
      { path: "github-followers", component: GithubFollowersComponent },
      {
        path: "github-follower-profile/:username",
        component: GithubFollowerProfileComponent
      },
      { path: "local-users", component: LocalUsersComponent },
      { path: "posts", component: PostsComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    JphPostsService,
    JsonUsersService,
    JphUsersService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
