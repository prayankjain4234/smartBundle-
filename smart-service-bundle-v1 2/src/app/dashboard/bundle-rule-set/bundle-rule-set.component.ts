import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {DashboardService, Rules, FileDetails} from '../dashboard.service';
import {BundleReducedComponent} from '../bundle-reduced/bundle-reduced.component'
@Component({
  selector: 'app-bundle-rule-set',
  templateUrl: './bundle-rule-set.component.html',
  styleUrls: ['./bundle-rule-set.component.css']
})
export class BundleRuleSetComponent implements OnInit {
  public ruleSet: Rules[] = [];
  public pruneSuccess = false;
  public completedPruningPromise: Promise<any>;
  public reducedBundleFiles: FileDetails[] = [];
  public loadingOptimizedBundleDetailsPromise : Promise<FileDetails[]>;
  @Output() public reducedBundleSend = new EventEmitter<FileDetails[]>();
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.ruleSet = this.dashboardService.getRules();
  }

  pruneBundle() {
    let rules = {};
    for(let rule of this.ruleSet) {
      rules[rule.ruleId] = rule.hasToBeApplied;
    }
    this.completedPruningPromise = this.dashboardService.pruneBundle(rules);
    this.completedPruningPromise.then(response => {
      this.pruneSuccess = true;
      this.loadOptimizedBundleDetails();
    });
  }

  loadOptimizedBundleDetails() {
    this.loadingOptimizedBundleDetailsPromise = this.dashboardService.getPrunedBundleFiles();
    this.loadingOptimizedBundleDetailsPromise.then(response => {
      this.reducedBundleFiles = response;
      this.reducedBundleSend.emit(this.reducedBundleFiles);           
    });
  }
}
