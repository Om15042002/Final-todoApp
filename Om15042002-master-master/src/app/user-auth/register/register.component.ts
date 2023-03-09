import { Component } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private builder: FormBuilder,private toastr:ToastrService,private service:AuthService,private router:Router){

  }
  registrationform=this.builder.group({
    firstname:this.builder.control('',Validators.required),
    uname:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(6)])),
    upassword:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  })

  proceedregisteration(){
    if(this.registrationform.valid){
      this.service.registeruser(this.registrationform.value).subscribe(res=>{
        this.toastr.success('Success','Registered sucessfully');
        this.router.navigate(['login']);
      })
    }
    else{
      this.toastr.warning("Please enter valid data!!")
    }
  }

}
