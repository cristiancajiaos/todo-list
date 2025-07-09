import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask implements OnDestroy {

  ngOnDestroy(): void {
      console.log("AddTask componente has been destroyed");
  }

}
