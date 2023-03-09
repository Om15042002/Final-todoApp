import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { UsertasksService } from 'src/app/service/usertasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  // imports: [NgbDatepickerModule, FormsModule, JsonPipe],
})
export class AddTaskComponent {
  closeResult: string | undefined;
  model: NgbDateStruct | undefined;
  // date: { year: number; month: number; } | undefined;

  // constructor(private calendar: NgbCalendar) {}
  constructor(
    private modalService: NgbModal,
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: UsertasksService,
    private router: Router
  ) { }
  // selectToday() {
  // 	this.model = this.calendar.getToday();
  // }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  taskform = this.builder.group({
    title: this.builder.control('', Validators.required),
    description: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(20)])
    ),
    duedate: this.builder.control('', Validators.required),
  });

  addtask() {
    if (this.taskform.valid) {
      this.service.addtask(this.taskform.value).subscribe((res) => {
        this.toastr.success('Success', 'task added sucessfully');
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning('Please fill all the details');
    }
  }
}
