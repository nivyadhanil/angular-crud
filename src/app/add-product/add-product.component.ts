import { ProductService } from '../product.service';
import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm:any;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private productservice: ProductService,
    private location: Location,
    private route: ActivatedRoute
    ) {
      this.addForm = this.formBuilder.group({
        name: ['', Validators.required],
        detail: ['', [Validators.required, Validators.maxLength(20)]],
        price: ['', [Validators.required, Validators.maxLength(20)]],
      })
     }
     ngOnInit(): void {
       
     }
     onSubmit(){
      // console.log(this.addForm.value)
      this.productservice.createProduct(this.addForm.value).subscribe (
        (data:any)=>{
          this.router.navigate(['/goto-productlist'])
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
