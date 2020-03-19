import { StudentsComponent } from './students/students.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'login',
    loadChildren: ' ./auth/auth.module#AuthModule'
  },
  {path:'about', component: AboutComponent},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path: 'students',component: StudentsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
