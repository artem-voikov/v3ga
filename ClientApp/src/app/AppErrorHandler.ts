import {
  ErrorHandler,
  Injectable,
  Inject,
  NgZone,
  isDevMode
} from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import * as Sentry from '@sentry/browser';

// @Injectable()
// export class AppErrorHandler implements ErrorHandler {
//   constructor(
//     private ngZone: NgZone,
//     @Inject(ToastyService) private toastyService: ToastyService
//   ) {}

//   handleError(error: any): void {
//     if (!isDevMode()) {
//       console.log(error);
//       Sentry.captureException(error.originalError || error);
//     } else {
//       throw error;
//     }

//     this.ngZone.run(() => {
//       this.toastyService.error({
//         title: 'Error',
//         msg: 'Something went wrong.',
//         theme: 'bootstrap',
//         timeout: 2000
//       });
//     });
//   }
// }
