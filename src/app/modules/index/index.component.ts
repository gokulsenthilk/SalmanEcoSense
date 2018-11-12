import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogContentExampleDialog } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
serviceForm: FormGroup;
  constructor(public dialog: MatDialog, public DialogContentExampleDialog: DialogContentExampleDialog) { }

  ngOnInit() {
    this.serviceForm = new FormGroup({
      service: new FormControl("", Validators.required),
      location: new FormControl("", Validators.required)
  });
  }
  openDialog() {
    console.log(this.serviceForm.value);
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
