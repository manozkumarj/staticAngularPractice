import { JphPostsService } from "./../../services/jph-posts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  allPostsList;
  constructor(public jphPosts: JphPostsService) {}

  ngOnInit() {
    this.jphPosts.getAllPosts().subscribe(posts => {
      this.allPostsList = posts.json();
      console.log(this.allPostsList);
    });
  }
}
