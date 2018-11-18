import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log('ERROR');

    // this.toasyService.error({
    //   title: 'Error',
    //   msg: 'Something went wrong.',
    //   theme: 'bootstrap',
    //   timeout: 2000
    // });
  }
}
