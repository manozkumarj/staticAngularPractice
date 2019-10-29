import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tiny-home",
  templateUrl: "./tiny-home.component.html",
  styleUrls: ["./tiny-home.component.css"]
})
export class TinyHomeComponent implements OnInit {
  @Input("aliasSub") fromSubTemplate: String;
  @Output("change") change = new EventEmitter();

  dummyObject = {
    name: "Manoj",
    status: "unchanged"
  };
  constructor() {}

  ngOnInit() {}

  clicked() {
    console.log("Button clicked");
    this.change.emit(this.dummyObject);
  }
}
