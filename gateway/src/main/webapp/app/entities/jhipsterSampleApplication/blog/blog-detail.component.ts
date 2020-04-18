import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBlog } from 'app/shared/model/jhipsterSampleApplication/blog.model';

@Component({
  selector: 'jhi-blog-detail',
  templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit {
  blog: IBlog | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ blog }) => (this.blog = blog));
  }

  previousState(): void {
    window.history.back();
  }
}