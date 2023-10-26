import { Component,OnInit ,ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
// import { FormControl } from '@angular/forms';
import { FormGroup,FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {

  
  product:any;
  editForm:any;

  @ViewChild("editproductForm")
  editproductForm!: NgForm;

   public name=new FormControl('');
   public detail=new FormControl('');
   public price=new FormControl('');

   constructor(
  
    private productservice : ProductService,
    private router: Router,
    private message:MessageService,
    private location: Location) { }

  ngOnInit(): void {
          this.getProductList();
  }
  getProductList()
  {
    this.productservice.getProduct().subscribe(
      (result: any)=>{this.product = result;
        console.log(this.product);})
  }
  deleteProduct(products:any){
  
     if (confirm("Are you sure to delete permanently")) {
        // this.productservice.deleteProduct(products.id).subscribe(data=>{
        //     this.product=this.product.filter((u: any)=>u !==products);
        // })
        this.productservice.deleteProduct(products.id).subscribe(response=>this.getProductList());
      }
  }

  
goback()
{
  this.location.back();
}

}
