import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-local-users-create",
  templateUrl: "./local-users-create.component.html",
  styleUrls: ["./local-users-create.component.css"]
})
export class LocalUsersCreateComponent implements OnInit {
  createUser: FormGroup;
  constructor() {
    this.createUser = new FormGroup({
      personalData: new FormGroup({
        name: new FormControl("", [
          Validators.required,
          Validators.pattern("^([a-zA-Z]{3,12})+ ([a-zA-Z]){3,12}$")
        ]),
        fatherName: new FormControl("", [
          Validators.required,
          Validators.pattern("^[a-zA-Z ]{3,12}$")
        ]),
        motherName: new FormControl("", [
          Validators.required,
          Validators.pattern("^[a-zA-Z]{3,12}$")
        ]),
        email: new FormControl("", [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$")
        ]),
        mobile: new FormControl("", [
          Validators.required,
          Validators.pattern("[6-9]\\d{9}")
        ]),
        gender: new FormControl("", [
          Validators.required
        ]),
        favDigit: new FormControl("", [
          Validators.required,
          Validators.pattern("^[0-9]{1}"),
          Validators.min(1),
          Validators.max(9)
        ]),
        weight: new FormControl("", [
          Validators.required,
          Validators.pattern("^[1-9]+[0-9]*$"),
          Validators.min(1),
          Validators.max(130)
        ])
      }),
      otherInfo: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
    });
  }

  ngOnInit() { }
}
