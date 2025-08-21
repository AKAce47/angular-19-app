import { HttpStatusCode } from '@angular/common/http';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'about-us',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact-us',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'faq',
    renderMode: RenderMode.Prerender
  },
  {
    path: '404',
    renderMode: RenderMode.Server,
    status: HttpStatusCode.NotFound,
    headers: {
      'Cache-Control': 'no-cache',

      //to stop indexing of this page/route via http header
      //(source: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag)
      'X-Robots-Tag': 'noindex, nofollow',
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
