import { ErrorHandler, Injectable, Inject, NgZone } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(
    private ngZone: NgZone,
    @Inject(ToastyService) private toastyService: ToastyService
  ) {}

  handleError(error: any): void {
    this.ngZone.run(() => {
      this.toastyService.error({
        title: 'Error',
        msg: 'Something went wrong.',
        theme: 'bootstrap',
        timeout: 2000
      });
    });
  }
}
