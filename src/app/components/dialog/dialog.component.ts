import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'dialog-content',
    templateUrl: 'dialog.component.html',
  })
  export class DialogContentExampleDialog {
    questions;
    form: FormGroup;
    constructor(public http: HttpClient) {}
    ngOnInit() {
      const api = 'assets/json/1.json';
      this.http.get(api).subscribe(data => {
        this.questions = data;
        console.log(data);
      })
    }
  }