import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { UsertasksService } from 'src/app/service/usertasks.service';

interface task {
  taskid: number;
  title: string;
  description: string;
  deadline: string;
  dateadded: string;
  isImportant: boolean;
  isCompleted: boolean;
  userid: number;
}

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent {
  tasks: task[] = [{
    taskid: 1,
    title: "go to market",
    description: "bring vegetables",
    deadline: "today",
    dateadded: "tomorrow",
    isImportant: false,
    isCompleted: false,
    userid: 1,
  },];
  // tasks:any=[]
  closeResult: string | undefined;
  model: NgbDateStruct | undefined;
  // isTaskImportant:boolean=flase
  markasdone=new FormControl()
  importanttask=new FormControl()

  constructor(private modalService: NgbModal, private UsertasksService: UsertasksService) {


   }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  // changetaskstate(){
  //   console.log(this.markasdone.value);
  // }
  // changeimportancestate(){
  //   console.log(this.importanttask.value);
  // }
  deleteTask(taskid: number, userid: number) {
    this.tasks = this.tasks.filter((task) => {
      return (task.taskid !== taskid) ? task : null;
    })
    this.UsertasksService.deletetask({ taskid: taskid, userid: userid }).subscribe((res) => {
      console.log("task deleted successfully");
    })
  }
  getTask() {
    const userid: number = 1;
    this.UsertasksService.gettasks(userid).subscribe((res) => {
      // this.tasks=res.data;
    })
  }

  edittask(task:task) {
    task["isImportant"]=(this.importanttask.value==undefined || this.importanttask.value==null)?false:true;
    task["isCompleted"]=this.markasdone.value;
    console.log(task);
    
      this.UsertasksService.edittask(task).subscribe((res) => {
        // this.tasks=res;
      })
  }

}
