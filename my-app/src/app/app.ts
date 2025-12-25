import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLogin = signal(false)
  show=signal(true)
  status=signal("notStarted")

  handleLogin(status:boolean){
    this.isLogin.set(status)
  }


}
