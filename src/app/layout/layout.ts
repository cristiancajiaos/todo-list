import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit, AfterViewInit {

  constructor() {
    console.log('Layout initiated from constructor');
  }

  ngOnInit(): void {
    console.log('Layout initiated from constructor');
  }

  ngAfterViewInit(): void {
      console.log("Layout initiated after initialized Layout view and both child views");
  }
}
