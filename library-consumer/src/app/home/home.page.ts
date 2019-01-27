import { Component, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';

import { UnifiedFirebaseMessagingService } from 'pey-unified-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy{

  constructor(public ps: Platform,
    private unifiedNotifications: UnifiedFirebaseMessagingService) { }
    isAlive= true;

    ngOnInit() {
  
    }
    ionViewWillEnter() {
      this.unifiedNotifications.token.subscribe(x => console.log(x));
    }
    ionViewDidLeave() {
      console.log('aaa');
    this.isAlive = false;
    }
    ngOnDestroy() { console.log('aaa');
    this.isAlive = false;
    }
    request() {
      this.unifiedNotifications.updatePermission();
    } 
}
