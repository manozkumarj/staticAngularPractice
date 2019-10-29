import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class JphUsersService {
  jphUsersUrl = "https://jsonplaceholder.typicode.com/users";
  constructor(public http: Http) {}

  getAllUsers() {
    return this.http.get(this.jphUsersUrl);
  }
}
