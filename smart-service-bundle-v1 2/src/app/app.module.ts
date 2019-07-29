import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityModule} from '@clr/angular';
import { BundleDefinationComponent } from './dashboard/bundle-defination/bundle-defination.component';
import { BundleDetailsComponent } from './dashboard/bundle-details/bundle-details.component';
import { BundleRuleSetComponent } from './dashboard/bundle-rule-set/bundle-rule-set.component';
import { BundleReducedComponent } from './dashboard/bundle-reduced/bundle-reduced.component';
import {FormsModule} from '@angular/forms';
import { WizardInlineComponent } from './dashboard/wizard-inline/wizard-inline.component';
import {DashboardService} from './dashboard/dashboard.service';
import {HttpClientModule} from '@angular/common/http';
import {BundleComparisonComponent} from './dashboard/bundle-comparison/bundle-comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BundleDefinationComponent,
    BundleDetailsComponent,
    BundleRuleSetComponent,
    BundleReducedComponent,
    WizardInlineComponent,
    BundleComparisonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
