import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { EventListComponent } from './Event/event-list/event-list.component';
import { SearchDeleteComponent } from './Event/search-delete/search-delete.component';
import { ImageDataComponent } from './image-data/image-data.component';
import { AddProjectComponent } from './PROJECT/add-project/add-project.component';
import { ListComponent } from './PATERNSHIP/list/list.component';
import {ListBackComponent} from './PATERNSHIP/list-back/list-back.component';
import { AddPComponent } from './PATERNSHIP/add-p/add-p.component';
import { AddTeamComponent } from './TEAM/add-team/add-team.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { ReadComponent } from './TEAM/read/read.component';
import { AddthComponent } from './THEMATIQUE/addth/addth.component';
import{UpdateComponent} from './Event/update/update.component';
import { AddDComponent } from './Document/add-d/add-d.component';
import { AddFComponent } from './Followed/add-f/add-f.component';
import { AffComponent } from './Followed/aff/aff.component';






const routes: Routes = [
{path:"admin", component: AllTemplateAdminComponent, children:[
    {path:"home", component: BodyAdminComponent},
    {path:"dashbord" ,component: DashbordComponent},
    {path:"app-add-event",component: AddEventComponent },
    {path:"event",component: EventListComponent},
  {path:"app-search-delete", component:SearchDeleteComponent}  ,
  {path:"app-image-data" , component:ImageDataComponent},
  {path:"socities", component:ListBackComponent},
  {path:"AddPComponent",component:AddPComponent},
  {path:"ListUserComponent",component:ListUserComponent},
  {path:"AddTeamComponent",component:AddTeamComponent},
  {path:"read",component:ReadComponent},
  {path:"app-addth",component:AddthComponent},
  {path:"UpdateComponent",component:UpdateComponent},
  {path:"AddFComponent",component:AddFComponent},

  



  ]
},
{
  path:"user", component:AllTemplateUserComponent, children:[
    {path:"body",component: BodyUserComponent},
    {path:"app-add-project" ,component: AddProjectComponent},
    {path:"app-list" , component: ListComponent},
    {path:"Document",component :AddDComponent},
    {path:"AffComponent",component :AffComponent},

    

    
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
