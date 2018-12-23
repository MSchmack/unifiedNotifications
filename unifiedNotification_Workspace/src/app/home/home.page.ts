import { Component } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { UnifiedFirebaseMessagingService } from 'projects/pey-unified-notifications/src/lib/services/notifications/unified-firebase-messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(    
    // private dialogs: Dialogs,
    private unifiedNotifications: UnifiedFirebaseMessagingService) { }


  request() {
    this.unifiedNotifications.updatePermission();
  }
}

