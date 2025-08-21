import { HttpStatusCode } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusCodeService } from '../../../core/services/status-code/status-code.service';
import { TitleService } from '../../../core/services/title/title.service';
import { SeoService } from '../../../core/services/seo/seo.service';

@Component({
  selector: 'error-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  private readonly statusCodeService = inject(StatusCodeService);
  private readonly seoService = inject(SeoService);
  private readonly titleService = inject(TitleService);
  
  constructor() {
    this.titleService.setTitleWithSuffix('Page Not Found');
    this.seoService.setNoIndex();
    this.statusCodeService.setStatusCode(HttpStatusCode.NotFound);
  }
}
