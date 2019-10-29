import { FormsModule } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Input() aliasSender;
  receivedObject;
  fullName;
  welcome: string = "Welcome to my Angular practice project";
  forSubTemplate: String = "From Home";

  constructor() {}

  ngOnInit() {}

  getFromChild(obj) {
    console.log("Object recevied");
    this.receivedObject = obj;
    console.log(obj);
  }
}
