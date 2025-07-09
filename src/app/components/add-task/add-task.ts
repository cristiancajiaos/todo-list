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

  public isActive: boolean = false;
  public taskActive!: boolean;
  public tasks: any[] = ['tarea1', 'tarea2', 'tarea3'];

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
    if (this.form.valid && this.form.get('title')?.value !== '') {
      this.taskActive = false;
      console.log(this.form.value.title);
    } else {
      this.taskActive = true;
    }
  }

}
