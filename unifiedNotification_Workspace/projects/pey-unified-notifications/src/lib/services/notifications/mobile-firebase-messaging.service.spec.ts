import { TestBed, inject } from '@angular/core/testing';

import { MobileFirebaseMessagingService } from './mobile-firebase-messaging.service';

describe('MobileFirebaseMessagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileFirebaseMessagingService]
    });
  });

  it('should be created', inject([MobileFirebaseMessagingService], (service: MobileFirebaseMessagingService) => {
    expect(service).toBeTruthy();
  }));
});
