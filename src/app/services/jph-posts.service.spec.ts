import { TestBed } from '@angular/core/testing';

import { JphPostsService } from './jph-posts.service';

describe('JphPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JphPostsService = TestBed.get(JphPostsService);
    expect(service).toBeTruthy();
  });
});
