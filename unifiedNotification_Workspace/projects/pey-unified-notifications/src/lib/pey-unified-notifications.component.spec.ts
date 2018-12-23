import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeyUnifiedNotificationsComponent } from './pey-unified-notifications.component';

describe('PeyUnifiedNotificationsComponent', () => {
  let component: PeyUnifiedNotificationsComponent;
  let fixture: ComponentFixture<PeyUnifiedNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeyUnifiedNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeyUnifiedNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
