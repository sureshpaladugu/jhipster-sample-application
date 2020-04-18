import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'blog',
        loadChildren: () => import('./jhipsterSampleApplication/blog/blog.module').then(m => m.BlogBlogModule)
      },
      {
        path: 'post',
        loadChildren: () => import('./jhipsterSampleApplication/post/post.module').then(m => m.BlogPostModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('./jhipsterSampleApplication/tag/tag.module').then(m => m.BlogTagModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./jhipsterSampleApplication/product/product.module').then(m => m.StoreProductModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class GatewayEntityModule {}
