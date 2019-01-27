import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { takeWhile } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebFirebaseMessagingService implements OnDestroy{

    permission = new BehaviorSubject<boolean>(null);
    token = new BehaviorSubject<string>(null);
    currentMessage = new BehaviorSubject(null);

    isAlive= true;
    isActive = false;

  constructor(
    private angularFireMessaging: AngularFireMessaging) {
      console.log('web');
  }
    ngOnDestroy() { console.log('webdead');
        this.isAlive = false;
        this.isActive = false;
    }
  init() {

    this.angularFireMessaging.messaging.pipe(takeWhile(() => this.isAlive)).subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      } 
    );
    // this.getToken();
    this.receiveMessage(); 
  }
  //on web getting the token means asking for permission
  updatePermission() {
    this.getToken();
  }
  getToken() {
    this.angularFireMessaging.requestToken
        .pipe(takeWhile(() => this.isAlive))
        .subscribe(
            (token) => {
                this.token.next(token);
                this.permission.next(true);
            },
            (err) => {
                console.error('Unable to get permission to notify.', err);
            }
        );
      return true;
  }
  receiveMessage() {
    this.angularFireMessaging.messages
        .pipe(takeWhile(() => this.isAlive))
        .subscribe((payload) => {
                this.currentMessage.next(payload);
        });
  }
  onTokenRefresh() {
      this.angularFireMessaging.tokenChanges
        .pipe(takeWhile(() => this.isAlive))
        .subscribe(token => {
            this.token.next(token);
        })
  }

}
