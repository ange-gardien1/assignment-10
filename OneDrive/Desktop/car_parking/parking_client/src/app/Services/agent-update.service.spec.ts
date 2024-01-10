import { TestBed } from '@angular/core/testing';

import { AgentUpdateService } from './agent-update.service';

describe('AgentUpdateService', () => {
  let service: AgentUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
