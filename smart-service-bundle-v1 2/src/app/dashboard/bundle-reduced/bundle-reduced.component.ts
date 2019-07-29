import {Component, OnChanges, OnInit, Input} from '@angular/core';
import {DashboardService, FileDetails, SmartBundleDetails} from '../dashboard.service';

@Component({
  selector: 'app-bundle-reduced',
  templateUrl: './bundle-reduced.component.html',
  styleUrls: ['./bundle-reduced.component.css']
})
export class BundleReducedComponent implements OnChanges, OnInit {
  public uploadedFileBundle: Promise<SmartBundleDetails>;
  @Input() reducedBundleFiles: FileDetails[] = [];
  public loading = true;
  public totalBundleSize = 0;
  public smartBundleDetails: SmartBundleDetails = null;
  public startBundleUpload = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if(this.reducedBundleFiles == null && this.reducedBundleFiles == undefined) {
      this.loading = true;
    } else {
      this.totalBundleSize = 0;
       for (let file of this.reducedBundleFiles) {
         this.totalBundleSize += file.filesize;
       }
      this.loading = false;
    }
  }

  uploadReducedServiceBundle() {
    this.startBundleUpload = true;
    this.uploadedFileBundle = this.dashboardService.uploadFileBundle();
    this.uploadedFileBundle.then((response : SmartBundleDetails) => {
      this.smartBundleDetails = response;
      this.startBundleUpload = false;
      this.loading = false;
    })
  }
}
