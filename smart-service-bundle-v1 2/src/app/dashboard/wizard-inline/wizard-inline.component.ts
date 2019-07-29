import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {ClrWizard} from '@clr/angular';
import {FileDetails} from '../dashboard.service';

@Component({
  selector: 'clr-wizard-inline',
  templateUrl: './wizard-inline.component.html',
  styleUrls: ['./wizard-inline.component.css']
})
export class WizardInlineComponent implements OnInit {
  @ViewChild('wizard', { static: false })
  wizard: ClrWizard;
  public bundleFiles: FileDetails[] = null;
  public reducedBundleFiles: FileDetails[] = null

  public open = true;
  constructor() { }

  ngOnInit() {
  }

  public loadedBundleFiles($event) {
    this.bundleFiles = $event;
  }

  public loadedReducedBundleFiles($event) {
    this.reducedBundleFiles = $event;
  }

}
