import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewayTestModule } from '../../../../test.module';
import { BlogDetailComponent } from 'app/entities/jhipsterSampleApplication/blog/blog-detail.component';
import { Blog } from 'app/shared/model/jhipsterSampleApplication/blog.model';

describe('Component Tests', () => {
  describe('Blog Management Detail Component', () => {
    let comp: BlogDetailComponent;
    let fixture: ComponentFixture<BlogDetailComponent>;
    const route = ({ data: of({ blog: new Blog(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewayTestModule],
        declarations: [BlogDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(BlogDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(BlogDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load blog on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.blog).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
