import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { AddTaskComponent } from './add-tasks/add-tasks.component';
import { User } from '../model/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
   standalone:false,
  // imports: [HeaderComponent, UserComponent,AddTaskComponent]
})
export class AppComponent {
  App_users = DUMMY_USERS;
  App_title = 'first-angular-project';
  App_Selecteduser!:User;
  App_SelectedUserId!:string;

  App_SelectedUser(id: any) {
    console.log("selected User" + id);
    this.App_Selecteduser = this.App_users.find(user => user.id === id)!;
    console.log(this.App_Selecteduser);
    this.App_SelectedUserId=this.App_Selecteduser.id;
  }
}
