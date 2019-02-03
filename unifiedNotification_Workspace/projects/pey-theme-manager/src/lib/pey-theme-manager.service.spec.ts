import { TestBed } from '@angular/core/testing';

import { PeyThemeManagerService } from './pey-theme-manager.service';

describe('PeyThemeManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeyThemeManagerService = TestBed.get(PeyThemeManagerService);
    expect(service).toBeTruthy();
  });
});
