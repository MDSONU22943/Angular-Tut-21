import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userData = signal<{ id: number; name: string; email: string; city: string; }[]>([])
  constructor(public userService: UserService) { }
  ngOnInit() {
    console.log(this.userService.userList());
    const data = this.userService.userList()
    this.userData.set(data)
  }
}
