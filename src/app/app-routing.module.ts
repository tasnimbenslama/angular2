import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { DashbordComponent } from './dashbord/dashbord.component';





const routes: Routes = [
{path:"admin", component: AllTemplateAdminComponent, children:[
    {path:"home", component: BodyAdminComponent},
    {path:"dashbord" ,component: DashbordComponent}
  ]
},
{
  path:"user", component:AllTemplateUserComponent, children:[
    {path:"body",component: BodyUserComponent},
    {path:"dashbord" ,component: DashbordComponent}
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
