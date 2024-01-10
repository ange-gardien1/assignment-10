import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.page.html',
  styleUrls: ['./create-user-account.page.scss'],
})
export class CreateUserAccountPage implements OnInit {

  newUser: Users =({});
  constructor(private userservice : UserService, private Router: Router) { }

  ngOnInit() {
  }

    SignUp(){
      this.userservice.SignUp(this.newUser).subscribe(()=>{
        this.Router.navigate(['sigin']);
      }, error => {
        window.alert("User Registration Failed ");
        console.log('error: ', error)
      });
    }

}
