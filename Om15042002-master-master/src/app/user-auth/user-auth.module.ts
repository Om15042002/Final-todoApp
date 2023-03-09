import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule,ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      // toastClass: 'toast toast-bootstrap-compatibility-fix'

    }),
  ],
  exports:[
    RegisterComponent,
    LoginComponent
  ]
})
export class UserAuthModule { }
