import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask implements OnInit {

  public numberTasks: number = 10;
  public titleTask: string = "";
  public activeButton: boolean = false;

  ngOnInit(): void {}

  public sendTask(): void {
    const sizeTitleTask = this.titleTask.split('');
    if (sizeTitleTask.length > 0) {
      this.activeButton = false;
    } else {
      this.activeButton = true;
    }
  }

  public sendData(form: NgForm): void {
    if (form.valid) {
      console.log(this.titleTask);

    }
  }
}
