import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { validation_messages } from "./person.validationmessages";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"]
})
export class PersonComponent implements OnInit {
  personForm: FormGroup;
  validation_messages;

  constructor() {}

  ngOnInit() {
    this.generateForm();
    this.validation_messages = validation_messages;
  }

  generateForm() {
    this.personForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.maxLength(20),
        Validators.required
      ]),
      lastName: new FormControl("", [
        Validators.maxLength(40),
        Validators.required
      ]),
      yearOfBirth: new FormControl(""),
      nationalRegNumber: new FormControl(
        "",
        Validators.pattern(
          "([0-9]{2})\\.([0-9]{2})\\.([0-9]{2})\\-([0-9]{3})\\.([0-9]{2})"
        )
      ),
      gender: new FormControl(""),
      address: new FormGroup({
        country: new FormControl(""),
        city: new FormControl(""),
        street: new FormControl(""),
        number: new FormControl("")
      })
    });
  }

  keyUp(event) {
    if (this.personForm.controls["nationalRegNumber"].valid) {
      document.getElementById("male").removeAttribute("checked");
      document.getElementById("female").removeAttribute("checked");
      if (this.isNatRegNrEven()) {
        document.getElementById("female").setAttribute("checked", "checked");
      } else {
        document.getElementById("male").setAttribute("checked", "checked");
      }
    }
  }

  isNatRegNrEven() {
    let natRegNr = this.personForm.value.nationalRegNumber;
    let lastChar = parseInt(natRegNr.substr(natRegNr.length - 4, 1));
    if (lastChar % 2 === 0 && natRegNr !== "") return true;
  }
}
