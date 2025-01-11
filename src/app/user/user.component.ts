import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { User } from '../../model/user';
import { CardComponent } from "../shared/card/card.component";


// interface User {
//   id: string,
//   avatar: string,
//   name: string
// }
// const RandomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
   standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Input({ required: true }) User_userSelected!: User
  @Output() User_select = new EventEmitter<string>();
  @Input() User_selected?: boolean;
  // avatar=input.required<string>();
  // name=input.required<string>();
  //  Users=signal(DUMMY_USERS[RandomIndex]);

  //  imagepath=computed(()=>'assets/users/'+this.Users().avatar);
  // imagepath=computed(()=>{
  //   return 'assets/users/'+this.avatar;
  // })
  //  get imagePath(){
  //   return 'assets/users/'+this.Users().avatar
  //  }

  //  onSelectedUser()
  //  {
  //   const RandomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.Users.set(DUMMY_USERS[RandomIndex]);
  //   console.log("Clicked");
  //  }
  get User_imagePath() {
    return 'assets/users/' + this.User_userSelected.avatar
  }
  User_onSelectedUser() {
    console.log(this.User_userSelected);
    this.User_select.emit(this.User_userSelected.id);
  }
} 
