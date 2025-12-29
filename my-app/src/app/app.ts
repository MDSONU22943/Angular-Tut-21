import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks = signal([
    { id: 0, title: "Team Lunch", completed: false }
  ])
  title = signal('')

  addTask() {
    // console.log(this.title())
    if (this.title()) {
      this.tasks.update((item) => (
        [...item, { id: this.tasks().length, title: this.title(), completed: false }]
      ))
      this.title.set('')
    }
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => (
      tasks.filter((task) => task.id != id)
    ))
  }
}
