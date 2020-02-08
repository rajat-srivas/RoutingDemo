import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ErrorsComponent } from './errors/errors.component';


const routes: Routes = [
  // {
  //   path:'users' , component:UsersComponent
  // },
  // { 
  //   path:'users/:id' , component:UsersComponent
  // },
  {
    path:'departments' , component:DepartmentsComponent
  },
  {
    path :"somethingElse" , redirectTo :"/users"
  },
  {
    path :"posts", loadChildren: './lazy-posts/lazy-posts.module#LazyPostsModule'
  },

  {
    path : "**", component:ErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
