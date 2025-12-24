import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:WritableSignal<string>= signal('')

  resetValue(){
    this.name.set("Anil Sidhu")
  }
  setValue(val:string){
    this.name.set(val)
  }


}
