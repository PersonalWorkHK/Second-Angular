import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from '../../../model/userTask';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone:false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() Task_userTask?: UserTask;
  @Output() Task_CompleteTask = new EventEmitter<string>();

  Task_CompletedTask(id?: string) {
    console.log('completedtas' + id);
    this.Task_CompleteTask.emit(id);
  }
}
