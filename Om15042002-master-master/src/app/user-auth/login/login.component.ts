import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService, private router: Router) {

  }
  loginform = this.builder.group({
    uname: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
    upassword: this.builder.control('', Validators.required),
  })

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.loginvalidation(this.loginform.value).subscribe(res => {
        if (res) {
          this.toastr.success('Success', 'logged in sucessfully');
          this.router.navigate(['']);

        }
      })
    }
    else {
      this.toastr.warning("Please enter valid !!")
    }
  }
  gotoregistration() {
    this.router.navigate(['login']);
  }
}
