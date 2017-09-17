import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('lgModal') modal;
      valForm: FormGroup;
  constructor(public fb: FormBuilder) { 
            this.valForm = fb.group({
            'name': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'address': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
            'company': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
            'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(9)])],
            'pincode': [null, Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(5)])],
            
        });
  }

  ngOnInit() {
  }
  showModal(value) {
    console.log(value);
    this.modal.show();
  }
}
