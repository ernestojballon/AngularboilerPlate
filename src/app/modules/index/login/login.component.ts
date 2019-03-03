import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userField = new FormControl('', [Validators.required]);
  pwdField = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }
  login(){
    // this.spinner.show();
    // this.service.Authenticate(this.userField.value, this.pwdField.value).subscribe(
    //   (data: loginResponse) => {
    //     this.service.setCurrentLogin(data);
    //     this.router.navigate(['home']);
    //     this.spinner.hide();
    //   },
    //   err => {
    //     console.log(err);
    //     this.toastr.error("invalid user or password");
    //     this.spinner.hide();
    //   }
    // );

  }

}
