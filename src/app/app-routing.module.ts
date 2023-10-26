import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { StudyComponent } from './study/study.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { TestBed } from '@angular/core/testing';
import { TestComponent } from './test/test.component';
const routes: Routes = [

 { path:'',component:DashboardComponent},
 { path: 'goto-productlist', component:ProductComponent},
 { path:'create',component:AddProductComponent},
 { path:'EditProduct/:id',component:EditProductComponent},
 { path:'goto-userlist',component:UserComponent},
 { path:'registerUser',component:AddUserComponent},
 { path:'EditUser/:id',component:EditUserComponent},
 { path:'goto-login',component:LoginComponent},
 { path:'goto-test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
