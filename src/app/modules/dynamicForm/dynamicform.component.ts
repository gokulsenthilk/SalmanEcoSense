import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

@Component({
  selector: "app-dynamic",
  templateUrl: "./dynamicform.component.html",
  styleUrls: ["./dynamicform.component.css"]
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  // regConfig: FieldConfig[] = [
  //   {
  //     type: "input",
  //     label: "Username",
  //     inputType: "text",
  //     name: "name",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Name Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern("^[a-zA-Z]+$"),
  //         message: "Accept only text"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "Email Address",
  //     inputType: "email",
  //     name: "email",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Email Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern(
  //           "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
  //         ),
  //         message: "Invalid email"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "Password",
  //     inputType: "password",
  //     name: "password",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Password Required"
  //       }
  //     ]
  //   },
  //   {
  //     type: "radiobutton",
  //     label: "Gender",
  //     name: "gender",
  //     options: ["Male", "Female"],
  //     value: "Male"
  //   },
  //   {
  //     type: "date",
  //     label: "DOB",
  //     name: "dob",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Date of Birth Required"
  //       }
  //     ]
  //   },
  //   {
  //     type: "select",
  //     label: "Country",
  //     name: "country",
  //     value: "UK",
  //     options: ["India", "UAE", "UK", "US"]
  //   },
  //   {
  //     type: "checkbox",
  //     label: "Accept Terms",
  //     name: "term",
  //     value: true
  //   },
  //   {
  //     type: "button",
  //     label: "Save"
  //   }
  // ];
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      display_as: "Type of planning:",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male"
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
          type: "checkbox",
          label: "What type of wedding planning is required?",
          display_as: "Type of planning:",
          name: "term",
          value: [],
          options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "button",
      label: "Save"
    }
  ];

  submit(value: any) {}
}
