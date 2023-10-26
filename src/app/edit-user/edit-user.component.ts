import { UserService } from '../user.service';
import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  edituserForm:any;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private userservice: UserService,
    private location: Location,
    private route: ActivatedRoute

    ) {
         this.initializeForm();
     }
  initializeForm()
  {
      this.edituserForm=new FormGroup({
      name : new FormControl(),
      email : new FormControl(),
      mobileno:new FormControl()
      });
  }
  // ngOnInit(): void {

  //   const userid = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  
  //   this.productservice.getSingleProduct(productId)
  //   .subscribe((data : any) => {this.productdetail=data;console.log('hi',this.productdetail);
  //   if(data!=null){
  //     this.editForm.name =this.productdetail.name;
  //     this.editForm.detail =this.productdetail.detail;
  //     this.editForm.price =this.productdetail.price;
  //   }
  //   });

  // }

  updateUser()
  {

  }
  goback()
  {
     this.location.back();
  }
}
