import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {

  public isDestroyed: boolean = false;
  public countDown: number;
  public intervalId: any;

  constructor() {
    this.countDown = 10;
    this.intervalId = setInterval(() => {
      this.countDown--;
      if (this.countDown === 0) {
        clearInterval(this.intervalId);
        this.isDestroyed = true;
      }
    }, 1000);

  }

  ngOnInit(): void {

  }

}
