import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class GithubFollowersService {
  githubFollowersUrl: string =
    "https://api.github.com/users/mosh-hamedani/followers";
  githubFollowerProfileUrl: string = "https://api.github.com/users/";

  constructor(public http: Http) {}
  getAllFollowers() {
    return this.http.get(this.githubFollowersUrl);
  }

  getFollowerProfile(username) {
    return this.http.get(this.githubFollowerProfileUrl + username);
  }
}
