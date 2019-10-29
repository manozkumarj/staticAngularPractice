import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GithubFollowersService } from "src/app/services/github-followers.service";

@Component({
  selector: "app-github-follower-profile",
  templateUrl: "./github-follower-profile.component.html",
  styleUrls: ["./github-follower-profile.component.css"]
})
export class GithubFollowerProfileComponent implements OnInit {
  usernameParam;
  profileData;
  constructor(
    public route: ActivatedRoute,
    private githubService: GithubFollowersService
  ) {}

  ngOnInit() {
    // this.usernameParam = this.route.snapshot.paramMap.get("username");
    // console.log(this.usernameParam);

    this.route.paramMap.subscribe(params => {
      this.usernameParam = params.get("username");
    });

    this.githubService
      .getFollowerProfile(this.usernameParam)
      .subscribe(data => {
        this.profileData = data.json();
        console.log(this.profileData);
      });
  }
}
