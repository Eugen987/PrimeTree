import { Component, OnInit } from '@angular/core';
import { FormElementsService } from '../formElements.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'input-description',
  templateUrl: './description.component.html'
  // styleUrls: ['../elements.form.css']
})
export class DescriptionFormComponent implements OnInit {
  model : any;
  form : FormGroup;

  constructor(private service : FormElementsService) {
    this.form = this.service.form;
    this.model = this.service.model;
    if (typeof this.model.description === 'undefined') {
      this.model.description = '';
    }
  }

  ngOnInit() {
    this.service.addFormControl('description', new FormControl('', Validators.required));
  }
}
