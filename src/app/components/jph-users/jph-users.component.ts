import { JphUsersService } from "./../../services/jph-users.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jph-users",
  templateUrl: "./jph-users.component.html",
  styleUrls: ["./jph-users.component.css"]
})
export class JphUsersComponent implements OnInit {
  jphUsersList;
  constructor(public jphUsers: JphUsersService) {}

  ngOnInit() {
    this.jphUsers
      .getAllUsers()
      .subscribe(data => (this.jphUsersList = data.json()));
    console.log(this.jphUsersList);
  }
}
