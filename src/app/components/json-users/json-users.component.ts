import { Component, OnInit } from "@angular/core";
import { JsonUsersService } from "src/app/services/json-users.service";

@Component({
  selector: "app-json-users",
  templateUrl: "./json-users.component.html",
  styleUrls: ["./json-users.component.css"]
})
export class JsonUsersComponent implements OnInit {
  jsonUsersList;
  constructor(public jsonUsers: JsonUsersService) {}

  ngOnInit() {
    let users = this.jsonUsers.getJSON().subscribe(user => {
      this.jsonUsersList = user.json();
      console.log(this.jsonUsersList);
    });
  }
}
