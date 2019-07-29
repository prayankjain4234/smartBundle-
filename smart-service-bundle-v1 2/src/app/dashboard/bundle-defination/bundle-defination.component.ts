import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DashboardService, FileDetails} from '../dashboard.service';

@Component({
  selector: 'app-bundle-defination',
  templateUrl: './bundle-defination.component.html',
  styleUrls: ['./bundle-defination.component.css']
})
export class BundleDefinationComponent {
  public listOfProducts = ['Vcenter', 'AppDefense', 'ESX'];
  public selectedProduct: string;
  public logLocation: string;
  public getBundleFilesPromise: Promise<FileDetails[]>;
  public bundleFiles: FileDetails[] = [];
  public collectedBundle = true;
  public successFullyDownloadedBundle = false;
  @Output() bundleFilesReceived = new EventEmitter<FileDetails[]>();
  constructor(private dashboardService: DashboardService) { }

  getBundleFiles() {
    this.collectedBundle = false;
    this.successFullyDownloadedBundle = false;
    this.getBundleFilesPromise = this.dashboardService.getBundleFiles(this.selectedProduct, this.logLocation);
    DashboardService.logLocation = this.logLocation;
    DashboardService.productName = this.selectedProduct;
    this.getBundleFilesPromise.then((response: FileDetails[]) => {
      this.collectedBundle = true;
      this.successFullyDownloadedBundle = true;
      this.bundleFiles = response;
      this.bundleFilesReceived.emit(this.bundleFiles);
    }).catch(err => {
      this.collectedBundle = false;
      this.successFullyDownloadedBundle = false;
      this.bundleFilesReceived.emit(null);
    });
  }

}
