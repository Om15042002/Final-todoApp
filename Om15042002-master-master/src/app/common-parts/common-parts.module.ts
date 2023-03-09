import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ToastmessageComponent } from './toastmessage/toastmessage.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ToastmessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    ToastmessageComponent
  ]
})
export class CommonPartsModule { }
