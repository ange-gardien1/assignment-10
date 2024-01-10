import { TestBed } from '@angular/core/testing';

import { UserParkingHistoryService } from './user-parking-history.service';

describe('UserParkingHistoryService', () => {
  let service: UserParkingHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserParkingHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
