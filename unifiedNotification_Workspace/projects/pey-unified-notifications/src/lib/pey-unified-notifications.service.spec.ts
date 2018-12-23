import { TestBed } from '@angular/core/testing';

import { PeyUnifiedNotificationsService } from './pey-unified-notifications.service';

describe('PeyUnifiedNotificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeyUnifiedNotificationsService = TestBed.get(PeyUnifiedNotificationsService);
    expect(service).toBeTruthy();
  });
});
