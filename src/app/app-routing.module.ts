import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { initializeApp } from 'firebase/app';

import { EmployeComponent } from './employe/employe.component';
import { HomeComponent } from './home/home.component';
import { VolComponent } from './vol/vol.component';
import { VolAnalyseComponent } from './vol-analyse/vol-analyse.component';
import { GuideComponent } from './guide/guide.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'Employe',
    component:EmployeComponent
  },
  {
    path:'Vol',
    component:VolComponent
  },
  {
    path:'Vol-Analyse',
    component:VolAnalyseComponent
  },
  {
    path:'Guide',
    component:GuideComponent
  }
  


];
const firebaseConfig = {
  //...
};


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
