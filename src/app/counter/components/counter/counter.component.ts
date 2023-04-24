import { Component } from '@angular/core';



@Component({
  template: `
<h3>Counter:{{counter}}</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
    `,
  selector:'app-counter'
})
export class CounterComponent {
  private static DEFAULT_COUNTER: number = 10;
  public counter: number = CounterComponent.DEFAULT_COUNTER;

  increaseBy(value:number):void{
    this.counter +=value;
  }

  resetCounter():void{
    this.counter = CounterComponent.DEFAULT_COUNTER;
  }

}
