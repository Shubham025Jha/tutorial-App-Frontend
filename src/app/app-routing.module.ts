import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path :'tutorials/adminpage' , component: AdminPageComponent},
  {path :'tutorials/userpage' , component: UserPageComponent},
  {path: 'tutorials/:id', component: TutorialDetailsComponent },
  {path: 'add', component: AddTutorialComponent },
  {path: 'tutorials', component: TutorialsListComponent },
  {path: 'login', component: LoginComponent},
  {path: 'userRegistration', component:RegisteruserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
