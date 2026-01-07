import { Component,signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  userData = signal("")
  constructor(public userService: UserService, public route:ActivatedRoute) { }
  ngOnInit() {
    // console.log(this.userService.userList());
    const data = this.userService.userList()
    this.route.params.subscribe((params)=>{
      // console.log(params['id']);
      const filteredData = data.filter((item) => item.id == Number(params['id']));
      console.log(filteredData[0]);
      this.userData.set(JSON.stringify(filteredData[0] || {}));
    })
  }
}
