import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements DoCheck {
  public value: number = 0;
  public previousValue: number = 0;
  public changesDetected: boolean = false;

  constructor() {}

  ngDoCheck(): void {
    console.log('Layout component detected DoCheck lifecycle');
    if (this.value !== this.previousValue) {
      this.changesDetected = true;
      this.previousValue = this.value;
    }
  }

  public updateValue(): void {
    this.value++;
    setInterval(() => {
      this.changesDetected = false;
    }, 2000);
  }
}
