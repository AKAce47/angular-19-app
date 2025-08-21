import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private readonly router = inject(Router);

  private readonly notFoundUrl: string = '/404';

  //redirect to the specified route.
  //optionally specifying if the location (URL) must not change;
  //defualt is true.
  redirect(url: string, skipChange: boolean = true): void {
    this.router.navigate([url], { skipLocationChange: skipChange });
  }

  //convenience wrapper to easily return the 404 result page.
  notFound(): void {
    this.redirect(this.notFoundUrl);
  }
}
/**
 * @description
 * a general/shared service to be used by any component.
 * contains helper logic or common functions.
 */