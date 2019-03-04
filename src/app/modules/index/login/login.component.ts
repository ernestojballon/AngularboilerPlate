import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';
import {FieldValidatorService} from 'src/app/services/utils/field-validator.service';
import {UserService} from 'src/app/services/http/user.service';

import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';

import { MatDialog } from '@angular/material';
import { LoginModel } from 'src/app/services/http/models/user/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userField = new FormControl('', [Validators.required]);
  pwdField = new FormControl('', [Validators.required]);

  constructor(
    public matcher: FieldValidatorService,
    private router: Router, 
    private dialog: MatDialog,
    private service: UserService, 
    private spinner: NgxSpinnerService, 
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  login(){
    this.spinner.show();
    this.service.Authenticate(this.userField.value, this.pwdField.value).subscribe(
      (data: LoginModel) => {
        console.log(data);
        this.service.setCurrentLogin(data);
        //this.router.navigate(['home']);
        this.spinner.hide();
      },
      err => {
        console.log(err);
        this.toastr.error("invalid user or password");
        this.spinner.hide();
      }
    );

  }

}
