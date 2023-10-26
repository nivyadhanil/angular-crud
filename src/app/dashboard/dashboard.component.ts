import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

 
  constructor(private route: ActivatedRoute, private router: Router,private location: Location,) { }

gotoProduct()
{
  this.router.navigate(['/goto-productlist'])
}
gotoUser()
{
  this.router.navigate(['/goto-userlist'])
}
gotoLogin()
{
  this.router.navigate(['/goto-login'])
}
gotoTest()
{
  this.router.navigate(['/goto-test'])
}





}
