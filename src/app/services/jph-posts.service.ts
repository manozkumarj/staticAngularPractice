import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class JphPostsService {
  jphPostsUrl: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(public http: Http) {}

  getAllPosts() {
    return this.http.get(this.jphPostsUrl);
  }
}
