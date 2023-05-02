import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { AddEventComponent } from './Event/add-event/add-event.component';
import { EventListComponent } from './Event/event-list/event-list.component';
import { SearchDeleteComponent } from './Event/search-delete/search-delete.component';
import { ImageDataComponent } from './image-data/image-data.component';
import { AddTeamComponent } from './TEAM/add-team/add-team.component';
import { AddProjectComponent } from './PROJECT/add-project/add-project.component';
import { ListComponent } from './PATERNSHIP/list/list.component';
import { ListBackComponent } from './PATERNSHIP/list-back/list-back.component';
import { AddPComponent } from './PATERNSHIP/add-p/add-p.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { ReadComponent } from './TEAM/read/read.component';
import { AddthComponent } from './THEMATIQUE/addth/addth.component';
import { UpdateComponent } from './Event/update/update.component';
import { AddDComponent } from './Document/add-d/add-d.component';
import { AddFComponent } from './Followed/add-f/add-f.component';
import { AffComponent } from './Followed/aff/aff.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    BodyUserComponent,
    HeaderUserComponent,
    FooterUserComponent,
    AllTemplateUserComponent,
    DashbordComponent,
    AddEventComponent,
    EventListComponent,
    SearchDeleteComponent,
    ImageDataComponent,
    AddTeamComponent,
    AddProjectComponent,
    ListComponent,
    ListBackComponent,
    AddPComponent,
    AddUserComponent,
    ListUserComponent,
    ReadComponent,
    AddthComponent,
    UpdateComponent,
    AddDComponent,
    AddFComponent,
    AffComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

