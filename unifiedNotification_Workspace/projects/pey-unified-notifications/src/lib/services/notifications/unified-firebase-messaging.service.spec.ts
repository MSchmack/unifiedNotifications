import { TestBed, inject } from '@angular/core/testing';

import { UnifiedFirebaseMessagingService } from './unified-firebase-messaging.service';

describe('UnifiedFirebaseMessagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnifiedFirebaseMessagingService]
    });
  });

  it('should be created', inject([UnifiedFirebaseMessagingService], (service: UnifiedFirebaseMessagingService) => {
    expect(service).toBeTruthy();
  }));
});
