import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from '../../model/NewTask';
import { CardComponent } from "../shared/card/card.component";
import { TaskService } from "../../services/task.services";


@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
})
export class AddTaskComponent {
  @Input() AddTasks_username?: any;
  @Input() AddTasks_userId!: string;
  AddTasks_NewTaskShow: boolean = false;

  constructor(private taskService: TaskService) {

  }


  get AddTasks_getSelectedUserTask() {
    return this.taskService.Task_Service_getUserTaskById(this.AddTasks_userId);
    // return this.AddTasks_tasks.filter((task) => task.userId == this.AddTasks_userId);
  }
  AddTasks_CompletedTask(id: any) {
    console.log("completed");
    this.taskService.Task_Service_DeleteTasks(id);
    // this.AddTasks_tasks = this.AddTasks_tasks.filter((task) => task.id !== id);
  }

  AddTasks_NewTasks() {
    this.AddTasks_NewTaskShow = true;
  }

  AddTasks_CloseNewTasks() {
    this.AddTasks_NewTaskShow = false;
  }

  AddTasks_NewTasksAdded(AddedTask: NewTask) {
    // this.AddTasks_tasks.unshift({
    //   id: new Date().getTime().toString(),
    //   userId: this.AddTasks_userId,
    //   dueDate: AddedTask.duedate,
    //   summary: AddedTask.summary,
    //   title: AddedTask.title
    // })
    this.taskService.Task_Service_AddNewTasks(AddedTask, this.AddTasks_userId);
    this.AddTasks_NewTaskShow = false;
  }
}
