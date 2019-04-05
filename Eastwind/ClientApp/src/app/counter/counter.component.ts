import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount += +this.getNumber();
  }

  public resetCounter() {
    this.currentCount = 0;
  }

  public getNumber() {
    var countValue = (<HTMLInputElement>document.getElementById("increments")).value;
    return countValue;
  }
}
