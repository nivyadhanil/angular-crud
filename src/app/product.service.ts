import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  url:string ='http://127.0.0.1:8000/api/products'
  url2:string ='http://127.0.0.1:8000/api/products/'     //angular crud only  old   From D: restAPI api route calling

  // url:string ='http://127.0.0.1:8000/products'       //angular with lumen rest api  03.06.2023
  // url2:string ='http://127.0.0.1:8000/products/'     //angular with lumen rest api  03.06.2023

  getProduct(){
    return this.http.get<Product[]>(this.url)
  }

  getSingleProduct(id : any){
    return this.http.get<Product[]>(this.url2 + id)
  }

  createProduct(product : any){
    return this.http.post(this.url , product)
  }

  deleteProduct(id : any){

    return this.http.delete(this.url2+id)
  }

  updateProduct(product : any,id:any){
    return this.http.patch(this.url2+id , product)
  }
}
