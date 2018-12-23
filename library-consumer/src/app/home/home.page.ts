import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { UnifiedFirebaseMessagingService } from 'pey-unified-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public ps: Platform,
    private unifiedNotifications: UnifiedFirebaseMessagingService) { }


    ngOnInit() {
  
      this.unifiedNotifications.token.subscribe(x => console.log(x));
    }
    request() {
      this.unifiedNotifications.updatePermission();
    }
  
}
