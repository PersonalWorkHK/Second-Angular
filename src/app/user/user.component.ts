import { Component,computed,Input,signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

// const RandomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
//  Users=signal(DUMMY_USERS[RandomIndex]);

//  imagepath=computed(()=>'assets/users/'+this.Users().avatar);

//  get imagePath(){
//   return 'assets/users/'+this.Users().avatar
//  }

//  onSelectedUser()
//  {
//   const RandomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
//   this.Users.set(DUMMY_USERS[RandomIndex]);
//   console.log("Clicked");
//  }
 get imagePath(){
  return 'assets/users/'+this.avatar
 }
 onSelectedUser()
 {
  
 }
} 
