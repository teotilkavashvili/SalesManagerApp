/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SalesManagerService } from './sales-manager.service';

describe('Service: SalesManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesManagerService]
    });
  });

  it('should ...', inject([SalesManagerService], (service: SalesManagerService) => {
    expect(service).toBeTruthy();
  }));
});
