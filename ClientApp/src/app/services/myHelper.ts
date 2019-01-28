import { Injectable } from '@angular/core';

@Injectable()
export class MyHelper {
  CreteQuery(obj: any) {
    const result = [];

    // tslint:disable-next-line:forin
    for (const p in obj) {
      const value = obj[p];
      if (value != null && value !== undefined) {
        result.push(`${encodeURIComponent(p)}=${encodeURIComponent(value)}`);
      }
    }
    return result.join('&');
  }
}
