import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private readonly title = inject(Title);

  //TODO
  //read this value from config, don't leave it hardcoded
  private readonly defaultSuffix: string = 'AKAce47 | Angular 19';
  
  setTitle(title: string): void {
    this.title.setTitle(title.trim());
  }

  //optional param for a suffix.
  //if no suffix is specified, default is used.
  //final format: title - suffix
  setTitleWithSuffix(title: string, suffix?: string): void {
    suffix = suffix == undefined ? this.defaultSuffix : suffix.trim();
    this.title.setTitle(`${title} - ${suffix}`);
  }
}
