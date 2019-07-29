import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BundleDefinationComponent} from './dashboard/bundle-defination/bundle-defination.component';
import {BundleDetailsComponent} from './dashboard/bundle-details/bundle-details.component';
import {BundleRuleSetComponent} from './dashboard/bundle-rule-set/bundle-rule-set.component';
import {BundleReducedComponent} from './dashboard/bundle-reduced/bundle-reduced.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
