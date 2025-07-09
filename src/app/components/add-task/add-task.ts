import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });

  }

  /*
  public sendTask(): void {
    const sizeTitleTask = this.titleTask.split('');
    if (sizeTitleTask.length > 0) {
      this.activeButton = false;
    } else {
      this.activeButton = true;
    }
    console.log(`Tarea enviada con éxito: ${this.titleTask}`);
  }
  */

  public sendTaskTitle(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
