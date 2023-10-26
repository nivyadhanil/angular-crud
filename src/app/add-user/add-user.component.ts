import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
  regForm:any;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private userservice: UserService,
    private location: Location,
    private route: ActivatedRoute
    ) {
      this.regForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        mobileno: ['', [Validators.required, Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.maxLength(20)]],
        c_password: ['', [Validators.required, Validators.maxLength(20)]],
      })
     }


     onSubmit(){
      // console.log(this.addForm.value)
      this.userservice.createUser(this.regForm.value).subscribe (
        (data:any)=>{
          this.router.navigate(['/goto-userlist'])
        },
        error=>{
          alert(error);
        });
    }

    goback()
        {
          this.location.back();
        }
}
