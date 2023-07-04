import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { EsignatureComponent } from './esignature/esignature.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docusign-code', component: EsignatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
