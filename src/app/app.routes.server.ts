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
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
