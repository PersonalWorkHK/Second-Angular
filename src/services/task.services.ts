import { Injectable } from "@angular/core";
import { NewTask } from "../model/NewTask";

@Injectable({ providedIn: 'root' })
export class TaskService {
    TaskService_tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31'
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Master Microservices',
            summary: 'Learn all the basic and advanced .net .',
            dueDate: '2025-11-31'
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Master Azure',
            summary: 'Learn all the basic and advanced Azure .',
            dueDate: '2025-11-31'
        }
    ];

    constructor() {
        const Constructor_TaskService_Task = localStorage.getItem('task');
        if (Constructor_TaskService_Task) {
            this.TaskService_tasks = JSON.parse(Constructor_TaskService_Task);
        }
    }

    private SaveTask() {
        localStorage.setItem('task', JSON.stringify(this.TaskService_tasks));
    }

    Task_Service_getUserTaskById(UserId: string) {
        return this.TaskService_tasks.filter((task) => task.userId == UserId);
    }

    Task_Service_DeleteTasks(Id: string) {
        this.TaskService_tasks = this.TaskService_tasks.filter((task) => task.id !== Id);
        this.SaveTask();
    }

    Task_Service_AddNewTasks(AddedTask: NewTask, UserId: string) {
        this.TaskService_tasks.unshift({
            id: new Date().getTime().toString(),
            userId: UserId,
            dueDate: AddedTask.duedate,
            summary: AddedTask.summary,
            title: AddedTask.title
        })
        this.SaveTask();
    }
}