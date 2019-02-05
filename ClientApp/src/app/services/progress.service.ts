import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BrowserXhr } from '@angular/http';

@Injectable()
export class ProgressService {
  private uploadProgress: Subject<any> = new Subject();
  downloadProgress: Subject<any> = new Subject();


  startTracking() {
    this.uploadProgress = new Subject();
    return this.uploadProgress;
  }

  notify(progress) {
    this.uploadProgress.next(progress);
  }

  endTracking() {
    this.uploadProgress.complete();
  }
  constructor() { }

}



@Injectable()
export class BrowserXhrWithProgressService extends BrowserXhr {

  constructor(private service: ProgressService) {
    super();
  }

  build(): XMLHttpRequest {
    const xhr: XMLHttpRequest = super.build();
    
    xhr.onprogress = event => {
      this.service.downloadProgress.next(this.createProgress(event));
    };

    xhr.upload.onloadend = () => {
      this.service.endTracking();
    };

    xhr.upload.onprogress = event => {
      this.service.notify(this.createProgress(event));
    };

    return xhr;
  }


  createProgress(event) {
    return {
      total: event.total,
      percentage: Math.round(event.loaded / event.total * 100 )
    };
  }
}