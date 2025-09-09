import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',component:LoginComponent},
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'teacher', loadChildren: () => import('./modules/teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'student', loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule) },
  { path: 'parent', loadChildren: () => import('./modules/parent/parent.module').then(m => m.ParentModule) },
  { path: 'accountant', loadChildren: () => import('./modules/accountant/accountant.module').then(m => m.AccountantModule) },
  { path: 'principal', loadChildren: () => import('./modules/principal/principal.module').then(m => m.PrincipalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
