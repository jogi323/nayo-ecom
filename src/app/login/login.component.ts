import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';

//defined services
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    authType= '';

    constructor(
        public settings: SettingsService,
        private fb: FormBuilder,
        private router: Router,
        private userService: UserService
    ) {

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });
        this.authType = 'login'

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
        }
        this.userService.attemptAuth(this.authType, {
            email: value.email,
            password: value.password
        }).subscribe(
            res => {
                console.log(res);
                localStorage.setItem('uId', res.id);
                    this.router.navigate(['/'+'home']);
                
            },
            (err) => {
                
            }
        );
    }

    ngOnInit() {

    }

}
