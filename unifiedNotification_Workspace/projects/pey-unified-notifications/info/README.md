Unifier


Demo on github and below


Downlaod all peer dependencies

npm i @angular/fire

npm i firebase

ng add angular/pwa

install https://beta.ionicframework.com/docs/native/firebase and https://beta.ionicframework.com/docs/native/dialogs as described by ionic



add   "src/firebase-messaging-sw.js" to your assets in angular.json

configure angular/fire as described in the package

add the following imports to your app module as described in the angualr/fire package

    AngularFireModule.initializeApp(config),

    AngularFireMessagingModule

place the firebase noitification plist and json (iOS/android) in the project root

place firebase-messaging-sw.js in your root where your index.html is

contents if you don't want to look it up:



______________________START



// Give the service worker access to Firebase Messaging.

// Note that you can only use Firebase Messaging here, other Firebase libraries

// are not available in the service worker.

importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');

importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing in the

// messagingSenderId.



firebase.initializeApp({

  'messagingSenderId': '*****Your key*****'

});


// Retrieve an instance of Firebase Messaging so that it can handle background

// messages.

const messaging = firebase.messaging();


___________________END



Init in app component if you want to use it global, else init in the component you are using it. Pass a value with .init depending if its native or web
Example use for web:



import { Component, OnInit } from '@angular/core';
import { UnifiedFirebaseMessagingService } from 'pey-unified-notifications';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {


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
