import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  PhoneNumber: string = '';
  Password : string = '';
  constructor(private userservice: UserService, private router : Router) {}
ngOnInit(): void {
  
}
  login()
  {
  
    this.userservice.login(this.PhoneNumber, this.Password).subscribe((Response: any)=>{
      this.router.navigateByUrl('/user-account');
    }, error => {
      console.log('Error',error);
      window.alert('Login Failed Try Again');
      this.router.navigateByUrl('/home')
    })
  }
}
