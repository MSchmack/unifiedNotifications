import { Component, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';

import { takeWhile } from 'rxjs/operators';
import { UnifiedFirebaseMessagingService } from 'pey-unified-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy{

  isAlive= true;

  constructor(private unifiedNotifications: UnifiedFirebaseMessagingService) { }

  ngOnInit() {
    //init should be with injected value in app component to be dynamic
    this.unifiedNotifications.init(false);
    this.unifiedNotifications.token
      .pipe(takeWhile(()=> this.isAlive))
      .subscribe(x => console.log(x));
    this.unifiedNotifications.currentMessage
      .pipe(takeWhile(()=> this.isAlive))
      .subscribe(x => console.log(x));
  }
  ngOnDestroy() { console.log('aaa');
    this.isAlive = false;
  }
  request() {
    this.unifiedNotifications.updatePermission();
  }
}
