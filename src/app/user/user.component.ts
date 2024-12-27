import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const RandomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 Users=DUMMY_USERS[RandomIndex];

 get imagePath(){
  return 'assets/users/'+this.Users.avatar
 }

 onSelectedUser()
 {
  const RandomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
  this.Users=DUMMY_USERS[RandomIndex];
  console.log("Clicked");
 }
}
