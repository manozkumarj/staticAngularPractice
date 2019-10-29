import { Component, OnInit } from "@angular/core";
import { GithubFollowersService } from "src/app/services/github-followers.service";

@Component({
  selector: "app-github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  githubFollowersList;
  constructor(public githubFollowersService: GithubFollowersService) {}

  ngOnInit() {
    this.githubFollowersService.getAllFollowers().subscribe(data => {
      this.githubFollowersList = data.json();
      console.log(this.githubFollowersList);
    });
  }
}
