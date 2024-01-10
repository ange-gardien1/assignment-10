import { TestBed } from '@angular/core/testing';

import { UserParkingHostoryService } from './user-parking-hostory.service';

describe('UserParkingHostoryService', () => {
  let service: UserParkingHostoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserParkingHostoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
