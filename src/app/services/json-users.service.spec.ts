import { TestBed } from '@angular/core/testing';

import { JsonUsersService } from './json-users.service';

describe('JsonUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonUsersService = TestBed.get(JsonUsersService);
    expect(service).toBeTruthy();
  });
});
