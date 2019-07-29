import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class DashboardService {
  public static logLocation = '';
  public static productName = '';
  private static serverRoot = 'http://localhost:5002';
  constructor(protected http: HttpClient) {
  }

  public getBundleFiles(product: string, location: string): Promise<FileDetails[]> {
    console.log("ok");

    let url = `${DashboardService.serverRoot}/getBundleFiles?product=` + product + '&location=' + location;
    return this.http.get(url)
      .toPromise()
      .catch(error => this.handleError(error));
  }

  public pruneBundle(rules) : Promise<any> {
    console.log("ok");

    const url  = `${DashboardService.serverRoot}/prune`;
    return this.http.post(url, rules).toPromise()
      .catch(error => this.handleError(error));
  }

  public uploadFileBundle(bundleId?: number): Promise<SmartBundleDetails> {
    console.log("ok");

    const url  = `${DashboardService.serverRoot}/zipSmartBundle`;
    return this.http.post(url, null).toPromise()
      .catch(error => this.handleError(error));
  }

  public getPrunedBundleFiles(): Promise<FileDetails[]> {
    console.log("ok");
    let url = `${DashboardService.serverRoot}/getOptimizeBundleFiles`;
    return this.http.get(url)
      .toPromise()
      .catch(error => this.handleError(error));
  }

  public getcomprasion():Promise<FileDetails[]>
{
  let url = `${DashboardService.serverRoot}/getOptimizeBundleFiles`;
  return this.http.get(url)
    .toPromise()
    .catch(error => this.handleError(error));
}

  public getRules(): Rules[] {
    const rules =  [ new Rules('RULE_1','Separate Config Logs at one place', false),
      new Rules('RULE_2','Separate out the error messages', false),
      new Rules('RULE_3','Logs for the last one hour', false)
    ];
    return rules;
  }

  protected handleError(error: any): Promise<any> {
    //console.info('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

export class FileDetails {
  constructor(public bundleId: number, public filename: string, public filesize) { }
}

export class Rules {
  constructor(public ruleId: string, public ruleName: string, public hasToBeApplied: boolean) {}
}

export class SmartBundleDetails {
  outputFileLocation: string;
}


