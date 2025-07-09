import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask implements OnInit {

  constructor(){
    console.log('AddTask initiated from constructor');
  }

  ngOnInit(): void {
    console.log('AddTask initiated from OnInit');
  }

}
