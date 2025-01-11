import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AddTaskComponent } from './add-tasks/add-tasks.component';
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./add-tasks/new-task/new-task.component";
import { TaskComponent } from "./add-tasks/task/task.component";
import { DatePipe } from '@angular/common';
import { SharedModule } from './shared/shared.modules';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    AddTaskComponent,
    NewTaskComponent,
    TaskComponent// Declare components, directives, and pipes
  ],
  imports: [
    BrowserModule, // Import other modules
    FormsModule,
    DatePipe,SharedModule
    
],
  providers: [
    // Specify services (injectable dependencies)
  ],
  bootstrap: [AppComponent], // The root component to bootstrap
})
export class AppModule {}
