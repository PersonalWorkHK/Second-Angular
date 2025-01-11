import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../../model/NewTask';

@Component({
  selector: 'app-new-task',
  standalone:false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() NewTask_closeAddNew = new EventEmitter<void>();
  @Output() NewTask_AddedTask = new EventEmitter<NewTask>();
  NewTask_Title?: any;
  NewTask_summary?: any;
  NewTask_duedate?: any;

  NewTask_OnClose() {
    this.NewTask_closeAddNew.emit();
  }

  NewTask_Onsubmit() {
    this.NewTask_AddedTask.emit({
      title: this.NewTask_Title,
      summary: this.NewTask_summary,
      duedate: this.NewTask_duedate
    })
  }
}
