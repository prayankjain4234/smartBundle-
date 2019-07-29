import {Component, Input, OnChanges} from '@angular/core';
import {FileDetails} from '../dashboard.service';

@Component({
  selector: 'app-bundle-details',
  templateUrl: './bundle-details.component.html',
  styleUrls: ['./bundle-details.component.css']
})
export class BundleDetailsComponent implements OnChanges {
  @Input() bundleFiles: FileDetails[];
  public totalBundleSize: number;

  constructor() {
  }

  ngOnChanges() {
    this.totalBundleSize = 0;
    if (this.bundleFiles != null && this.bundleFiles != undefined) {
      for (let file of this.bundleFiles) {
        this.totalBundleSize += file.filesize;
      }
    }
  }
}
