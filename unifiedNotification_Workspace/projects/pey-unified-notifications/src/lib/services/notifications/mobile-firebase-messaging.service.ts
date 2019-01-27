import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

// declare var FirebasePlugin;
import { Firebase } from '@ionic-native/firebase/ngx';
import { takeWhile } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MobileFirebaseMessagingService implements OnDestroy {

  permission = new BehaviorSubject<boolean>(null);
  token = new BehaviorSubject<string>(null);

  currentMessage = new BehaviorSubject(null);

  isAlive = true;

  constructor(
    private firebase: Firebase
  ) { }

  ngOnDestroy() {
    this.isAlive = false;
  }
  init() {
    this.getToken();
    this.initNotifications();
  }
  getToken() { 
    this.firebase.getToken()
        .then( token => {
          this.token.next(token);
        })
        .catch(err => console.log(err));

    this.firebase.onTokenRefresh()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe( x => {
        //posts on update
        if(x) {
          if(x !== this.token) {
            this.token.next(x);
          }
        }
      });
  }
  initNotifications() { 
    this.firebase.onNotificationOpen()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe( notification => {
          this.currentMessage.next(notification);
      });
  }
  joinGroup(id: string) {
    console.log('subscribe to group' + id);
    this.firebase.subscribe(id);
  }
  leaveGroup(id: string) {
    console.log('unsubscribe to group' + id);
    this.firebase.unsubscribe(id);
  }
  updatePermission() {
    this.firebase.grantPermission()
      .then(permission => {
        this.permission.next(permission);
      })
      .catch(err => console.log(err));
    this.firebase.hasPermission()
      .then(perm =>  {
        console.log('permission');
        console.log(perm);
      })
      .catch(err => console.log(err));
  }
  hasPermission(): Promise<boolean> {
    return this.firebase.hasPermission()
              .then(perm => {
                return perm.isEnabled;
              });
  }
}