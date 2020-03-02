import { TestBed } from '@angular/core/testing';

import { DataingestService } from './dataingest.service';

describe('DataingestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataingestService = TestBed.get(DataingestService);
    expect(service).toBeTruthy();
  });
});
