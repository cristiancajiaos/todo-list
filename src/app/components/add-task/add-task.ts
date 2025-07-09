import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask implements AfterContentInit, AfterContentChecked {

  ngAfterContentInit(): void {
    console.log('AddTask, content proyected into this component has been initialized');
  }

  ngAfterContentChecked(): void {
    console.log('AddTask, content projected and initialized has been checked');
  }
}
