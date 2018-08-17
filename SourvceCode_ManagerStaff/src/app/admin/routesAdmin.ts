import { Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component'
import { ManagedConfigComponent } from './component/managed-config/managed-config.component'
import { ManagedNotificationComponent } from './component/managed-notification/managed-notification.component'
import { ManagedProjectComponent } from './component/managed-project/managed-project.component'
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component';
import { ManagedTimesheetComponent } from './component/managed-timesheet/managed-timesheet.component';
import { ManagedSalaryComponent } from './component/managed-salary/managed-salary.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NotificationAddComponent } from './component/managed-notification/notification-add/notification-add.component'
import { StaffInforComponent } from './component/managed-staff/staff-infor/staff-infor.component';
import { CvInforComponent } from './component/managed-staff/cv-infor/cv-infor.component';
import { LoginGuard } from './../AdminLogin.guard';
import { NotificationEditComponent } from './component/managed-notification/notification-edit/notification-edit.component'


export const routesAdmin: Routes = [
    {
        path: 'admin',
        component: AdminComponentComponent,
        canActivate: [LoginGuard],
        children: [

            {
                path: 'config',
                component: ManagedConfigComponent
            },
            {
                path: 'notification',
                component: ManagedNotificationComponent,
                children: [

                    {
                        path: 'notification-add',
                        component: NotificationAddComponent
                    },
                    
                ]
            },
            {
                path:'notification/:id',
                component: ManagedNotificationComponent,
                children:[
                    {
<<<<<<< HEAD
                        path: 'staff',
                        component: ManagedStaffComponent,
                        children:[
                            {
                                path:'',
                                component: HomePageComponent
                            },
                            {
                                path:'staff-infor',
                                component: StaffInforComponent
                            },
                            {
                                path:'cv-infor',
                                component: CvInforComponent
                            }
                        ]
                    },
=======
                        path:'edit',
                        component:NotificationEditComponent  
                    }
                ]


            }
            ,
            {
                path: 'project',
                component: ManagedProjectComponent
            },
            {
                path: 'staff',
                component: ManagedStaffComponent,
                children: [
>>>>>>> d35eba40ea3a8c3271b8a7e7efe2563ce5156c65
                    {
                        path: '',
                        component: ManagedStaffComponent
                    },
                    {
                        path: 'staff-infor',
                        component: StaffInforComponent
                    },
                    {
                        path: 'cv-infor',
                        component: CvInforComponent
                    }
                ]
            },
            {
                path: 'timesheet',
                component: ManagedTimesheetComponent
            },
            {
                path: 'salary',
                component: ManagedSalaryComponent
            },
            {
                path: 'index',
                component: HomePageComponent
            },


        ]
    }

]


