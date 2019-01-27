import { Component, OnInit, OnDestroy } from '@angular/core';

import { UnifiedFirebaseMessagingService } from 'projects/pey-unified-notifications/src/lib/services/notifications/unified-firebase-messaging.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  , OnDestroy{

  isAlive= true;

  constructor(private unifiedNotifications: UnifiedFirebaseMessagingService) { }

  ngOnInit() {
    //init should be with injected value in app component to be dynamic
    this.unifiedNotifications.init(false);
    this.unifiedNotifications.token.pipe(takeWhile(()=> this.isAlive)).subscribe(x => console.log(x));
    this.unifiedNotifications.currentMessage.pipe(takeWhile(()=> this.isAlive)).subscribe(x => console.log(x));
  }
  ngOnDestroy() { console.log('aaa');
    this.isAlive = false;
  }
  request() {
    this.unifiedNotifications.updatePermission();
  }
}

