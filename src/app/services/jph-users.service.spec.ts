import { TestBed } from '@angular/core/testing';

import { JphUsersService } from './jph-users.service';

describe('JphUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JphUsersService = TestBed.get(JphUsersService);
    expect(service).toBeTruthy();
  });
});
