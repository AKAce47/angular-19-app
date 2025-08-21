import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly meta = inject(Meta);

  removeMetaTag(name: string): void {
    this.meta.removeTag(`name="${name}"`);
  }

  setMetaTag(key: string, value: string): void {
    this.meta.updateTag({name: key, content: value});
  }

  setMetaTags(tags: {
    title?: string;
    description?: string;
    keywords?: string;
    [key: string]: string | undefined;
  }): void {
    // Add or update meta tags
    if (tags.title) {
      this.setMetaTag('title', tags.title);
    }

    if (tags.description) {
      this.setMetaTag('description', tags.description);
    }

    if (tags.keywords) {
      this.setMetaTag('keywords', tags.keywords);
    }

    // You can add any other meta tags
    Object.keys(tags).filter(t => {!['title', 'description', 'keywords'].includes(t)})
    .forEach((key) => {
      if (tags[key]) {
        this.setMetaTag(key, tags[key] as string);
      }
    });
  }

  setCanonicalLink(url?: string): void {
    const canURL = url || window.location.href;
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canURL);

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
  }

  setNoIndex(): void {
    this.setMetaTag('robots', 'noindex, nofollow');
    //for more info on index blocking, see google's documentation
    // https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives
  }
}
