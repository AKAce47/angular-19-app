import { Injectable, Optional, Inject, PLATFORM_ID, RESPONSE_INIT } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StatusCodeService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(RESPONSE_INIT) private response: ResponseInit
  ) {}

  //set the http status code for a component.
  //NB: only works if the route the component is on
  //is renered server side.
  setStatusCode(statusCode: number): void {
    if (isPlatformServer(this.platformId) && this.response) {
      this.response.status = statusCode;
    }
  }
}
