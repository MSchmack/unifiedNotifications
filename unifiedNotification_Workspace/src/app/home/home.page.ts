import { Component, OnInit } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { UnifiedFirebaseMessagingService } from 'projects/pey-unified-notifications/src/lib/services/notifications/unified-firebase-messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(    
    // private dialogs: Dialogs,
    private unifiedNotifications: UnifiedFirebaseMessagingService) { }


  ngOnInit() {

    this.unifiedNotifications.token.subscribe(x => console.log(x));
  }
  request() {
    this.unifiedNotifications.updatePermission();
  }
}

