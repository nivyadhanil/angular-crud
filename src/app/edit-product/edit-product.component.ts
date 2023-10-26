import { ProductService } from '../product.service';
import { Component,OnInit,ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})



export class EditProductComponent implements OnInit {

    productId:any;
    productdetail:any;
    //editForm:FormGroup;
    editForm:any;
    product :any;

    constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private productservice: ProductService,
    private location: Location,
    private route: ActivatedRoute

    ) {
          this.initializeForm();
     }
    initializeForm()
    {
        this.editForm=new FormGroup({
          name : new FormControl(),
          detail : new FormControl(),
          price:new FormControl()
        });
    }
     //editForm:FormGroup;
   
     ngOnInit(): void {

        const productId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      
        this.productservice.getSingleProduct(productId)
        .subscribe((data : any) => {this.productdetail=data;console.log('hi',this.productdetail);
        if(data!=null){
          this.editForm.name =this.productdetail.name;
          this.editForm.detail =this.productdetail.detail;
          this.editForm.price =this.productdetail.price;
        }
        });

      }

      updateProduct(){
        const productId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
        // alert(productId);
        this.productservice.updateProduct(this.editForm.value,productId)
        .subscribe (
          (data:any)=>{
            this.router.navigate(['/goto-productlist'])
          },
          error=>{
            alert(error);
          }
          );
      }

    goback()
    {
       this.location.back();
    }
    


}
