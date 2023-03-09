import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';

import { ViewtaskComponent } from './viewtask/viewtask.component';
import { CommonPartsModule } from '../common-parts/common-parts.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [AddTaskComponent, ViewtaskComponent],
  exports: [AddTaskComponent, ViewtaskComponent],
  imports: [
    CommonModule,
    CommonPartsModule,
    MatSlideToggleModule,
    MatChipsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      // toastClass: 'toast toast-bootstrap-compatibility-fix'
    }),
    ReactiveFormsModule
  ],
})
export class TaskPagesModule {}
