import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter:WritableSignal<number> =signal<number>(0)

  increment() {
    this.counter.update((val) => val + 1)
  }

  decrement() {
    if (this.counter() > 0) {

      this.counter.update((val) => val - 1)
    }
  }

  reset() {
    this.counter.set(0)
  }


}
