import { Component,OnInit  } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  user:any;

  constructor(private location: Location,private userservice:UserService) { }
  
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList()
  {
    this.userservice.getUserDetails().subscribe ((result: any)=>{this.user = result;
      console.log(this.user);})
  }
  deleteUser(users:any){
      //alert(users.id);
    if (confirm("Are you sure to delete permanently")) {
       // this.productservice.deleteProduct(products.id).subscribe(data=>{
       //     this.product=this.product.filter((u: any)=>u !==products);
       // })
       this.userservice.deleteUser(users.id).subscribe(response=>this.getUserList());
     }
 }
  
  goback()
  {
    this.location.back();
  }


}
