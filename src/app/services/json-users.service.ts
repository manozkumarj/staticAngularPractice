import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class JsonUsersService {
  private _jsonURL = "assets/sources/users.json";
  constructor(private http: Http) {
    this.getJSON().subscribe(data => {
      JSON.stringify(data);
    });
  }

  public getJSON() {
    return this.http.get(this._jsonURL);
  }
}
