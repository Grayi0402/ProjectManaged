
//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommonModuleModule } from './../all-common-module/all-common-module.module'
import { RouterModule } from '@angular/router';
import  {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//component
import { ManagedConfigComponent } from './component/managed-config/managed-config.component';
import { ManagedNotificationComponent } from './component/managed-notification/managed-notification.component';
import { ManagedProjectComponent } from './component/managed-project/managed-project.component';
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component';
import { ManagedTimesheetComponent } from './component/managed-timesheet/managed-timesheet.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { routesAdmin } from './routesAdmin';
import { ManagedSalaryComponent } from './component/managed-salary/managed-salary.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { StaffInforComponent } from './component/managed-staff/staff-infor/staff-infor.component';
import { CvInforComponent } from './component/managed-staff/cv-infor/cv-infor.component';
import { NotificationAddComponent } from './component/managed-notification/notification-add/notification-add.component';

@NgModule({
  imports: [
    CommonModule,
    AllCommonModuleModule,
    RouterModule.forChild(routesAdmin),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ManagedConfigComponent,
    ManagedNotificationComponent,
    ManagedProjectComponent,
    ManagedStaffComponent,
    ManagedTimesheetComponent,
    AdminComponentComponent,
    ManagedSalaryComponent,
    HomePageComponent,
    StaffInforComponent,
    CvInforComponent,
    NotificationAddComponent,
   
    
    ],
    bootstrap:[AdminComponentComponent],
    exports:[AdminComponentComponent]
})
export class AdminModule { }
