import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.html',
  styleUrl: './list-task.scss'
})
export class ListTask implements OnInit {

  constructor() {
    console.log('ListTask initiated from constructor');
  }

  ngOnInit(): void {
    console.log('ListTask initiated from constructor');
  }

}
