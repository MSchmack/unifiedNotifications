import { Firebase as Firebase$1 } from '@ionic-native/firebase/ngx/index';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { takeWhile } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Platform as Platform$1 } from '@ionic/angular/dist/providers/platform';
import { Dialogs as Dialogs$1 } from '@ionic-native/dialogs/ngx/index';
import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MobileFirebaseMessagingService {
    /**
     * @param {?} firebase
     */
    constructor(firebase) {
        this.firebase = firebase;
        this.permission = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.currentMessage = new BehaviorSubject(null);
        this.isAlive = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isAlive = false;
    }
    /**
     * @return {?}
     */
    init() {
        this.getToken();
        this.initNotifications();
    }
    /**
     * @return {?}
     */
    getToken() {
        this.firebase.getToken()
            .then(token => {
            this.token.next(token);
        })
            .catch(err => console.log(err));
        this.firebase.onTokenRefresh()
            .pipe(takeWhile(() => this.isAlive))
            .subscribe(x => {
            //posts on update
            if (x) {
                if (x !== this.token) {
                    this.token.next(x);
                }
            }
        });
    }
    /**
     * @return {?}
     */
    initNotifications() {
        this.firebase.onNotificationOpen()
            .pipe(takeWhile(() => this.isAlive))
            .subscribe(notification => {
            this.currentMessage.next(notification);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    joinGroup(id) {
        console.log('subscribe to group' + id);
        this.firebase.subscribe(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    leaveGroup(id) {
        console.log('unsubscribe to group' + id);
        this.firebase.unsubscribe(id);
    }
    /**
     * @return {?}
     */
    updatePermission() {
        this.firebase.grantPermission()
            .then(permission => {
            this.permission.next(permission);
        })
            .catch(err => console.log(err));
        this.firebase.hasPermission()
            .then(perm => {
            console.log('permission');
            console.log(perm);
        })
            .catch(err => console.log(err));
    }
    /**
     * @return {?}
     */
    hasPermission() {
        return this.firebase.hasPermission()
            .then(perm => {
            return perm.isEnabled;
        });
    }
}
MobileFirebaseMessagingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MobileFirebaseMessagingService.ctorParameters = () => [
    { type: Firebase }
];
/** @nocollapse */ MobileFirebaseMessagingService.ngInjectableDef = defineInjectable({ factory: function MobileFirebaseMessagingService_Factory() { return new MobileFirebaseMessagingService(inject(Firebase$1)); }, token: MobileFirebaseMessagingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformHelperService {
    /**
     * @param {?} platformService
     */
    constructor(platformService) {
        this.platformService = platformService;
    }
    /**
     * @return {?}
     */
    get isNative() {
        //if http://local like in prod build & ios or android
        // solution till platform.is('mobile') fixed
        // return true;
        if (
        // (document.URL.indexOf( 'http://localhost') !== -1) &&
        (window.hasOwnProperty('cordova')) &&
            (this.platformService.is('ios') || this.platformService.is('android'))) {
            return true;
        }
        else {
            return false;
        }
    }
}
PlatformHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PlatformHelperService.ctorParameters = () => [
    { type: Platform }
];
/** @nocollapse */ PlatformHelperService.ngInjectableDef = defineInjectable({ factory: function PlatformHelperService_Factory() { return new PlatformHelperService(inject(Platform$1)); }, token: PlatformHelperService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WebFirebaseMessagingService {
    /**
     * @param {?} angularFireMessaging
     */
    constructor(angularFireMessaging) {
        this.angularFireMessaging = angularFireMessaging;
        this.permission = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.currentMessage = new BehaviorSubject(null);
        this.isAlive = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isAlive = false;
    }
    /**
     * @return {?}
     */
    init() {
        this.angularFireMessaging.messaging.subscribe((_messaging) => {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
        // this.getToken();
        this.receiveMessage();
    }
    //on web getting the token means asking for permission
    /**
     * @return {?}
     */
    updatePermission() {
        this.getToken();
    }
    /**
     * @return {?}
     */
    getToken() {
        this.angularFireMessaging.requestToken
            .pipe(takeWhile(() => this.isAlive))
            .subscribe((token) => {
            this.token.next(token);
            this.permission.next(true);
        }, (err) => {
            console.error('Unable to get permission to notify.', err);
        });
    }
    /**
     * @return {?}
     */
    receiveMessage() {
        this.angularFireMessaging.messages
            .pipe(takeWhile(() => this.isAlive))
            .subscribe((payload) => {
            this.currentMessage.next(payload);
        });
    }
    /**
     * @return {?}
     */
    onTokenRefresh() {
        this.angularFireMessaging.tokenChanges
            .pipe(takeWhile(() => this.isAlive))
            .subscribe(token => {
            this.token.next(token);
        });
    }
}
WebFirebaseMessagingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WebFirebaseMessagingService.ctorParameters = () => [
    { type: AngularFireMessaging }
];
/** @nocollapse */ WebFirebaseMessagingService.ngInjectableDef = defineInjectable({ factory: function WebFirebaseMessagingService_Factory() { return new WebFirebaseMessagingService(inject(AngularFireMessaging)); }, token: WebFirebaseMessagingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnifiedFirebaseMessagingService {
    /**
     * @param {?} mobileNotifications
     * @param {?} webNotifications
     * @param {?} platformHelper
     * @param {?} platformService
     */
    constructor(mobileNotifications, webNotifications, platformHelper, platformService) {
        this.mobileNotifications = mobileNotifications;
        this.webNotifications = webNotifications;
        this.platformHelper = platformHelper;
        this.platformService = platformService;
        this.currentMessage = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.IsActive = false;
        //  only relevant on ios
        this.permission = new BehaviorSubject(null);
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.init();
            this.currentMessage = this.mobileNotifications.currentMessage;
            this.permission = this.mobileNotifications.permission;
            this.token = this.mobileNotifications.token;
        }
        else {
            this.webNotifications.init();
            this.currentMessage = this.webNotifications.currentMessage;
            this.token = this.webNotifications.token;
            this.permission = this.webNotifications.permission;
        }
        this.IsActive = true;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    joinGroup(id) {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.joinGroup(id);
        }
        else {
            console.log('web topic/group subscriptions have to be resolved serverside');
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    leaveGroup(id) {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.leaveGroup(id);
        }
        else {
            console.log('web topic/group subscriptions have to be resolved serverside');
        }
    }
    /**
     * @return {?}
     */
    updatePermission() {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.updatePermission();
        }
        else {
            this.webNotifications.getToken();
        }
    }
    // only works on iOS other platforms dont need permissions
    /**
     * @return {?}
     */
    hasPermission() {
        if (this.platformService.is('ios') && this.platformHelper.isNative) {
            return this.mobileNotifications.hasPermission()
                .then(res => {
                console.log(res);
                return res;
            });
        }
        {
            return new Promise(() => {
                return true;
            });
        }
    }
}
UnifiedFirebaseMessagingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UnifiedFirebaseMessagingService.ctorParameters = () => [
    { type: MobileFirebaseMessagingService },
    { type: WebFirebaseMessagingService },
    { type: PlatformHelperService },
    { type: Platform }
];
/** @nocollapse */ UnifiedFirebaseMessagingService.ngInjectableDef = defineInjectable({ factory: function UnifiedFirebaseMessagingService_Factory() { return new UnifiedFirebaseMessagingService(inject(MobileFirebaseMessagingService), inject(WebFirebaseMessagingService), inject(PlatformHelperService), inject(Platform$1)); }, token: UnifiedFirebaseMessagingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IosPushNotificationPermissiongGuard {
    /**
     * @param {?} platformService
     * @param {?} dialogs
     * @param {?} unifiedNotificationService
     */
    constructor(platformService, dialogs, unifiedNotificationService) {
        this.platformService = platformService;
        this.dialogs = dialogs;
        this.unifiedNotificationService = unifiedNotificationService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (!this.platformService.is('ios')) {
            return true;
        }
        return this.unifiedNotificationService.hasPermission().then(res => {
            if (res) {
                return true;
            }
            else {
                return this.dialogs.alert('This app requires push notifications to work as intended.\nYou can turn them silent any time you want.', 'Important')
                    .then(() => {
                    this.unifiedNotificationService.updatePermission();
                    return true;
                })
                    .catch(e => {
                    console.log(e);
                    return true;
                });
            }
        });
        return false;
    }
}
IosPushNotificationPermissiongGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
IosPushNotificationPermissiongGuard.ctorParameters = () => [
    { type: Platform },
    { type: Dialogs },
    { type: UnifiedFirebaseMessagingService }
];
/** @nocollapse */ IosPushNotificationPermissiongGuard.ngInjectableDef = defineInjectable({ factory: function IosPushNotificationPermissiongGuard_Factory() { return new IosPushNotificationPermissiongGuard(inject(Platform$1), inject(Dialogs$1), inject(UnifiedFirebaseMessagingService)); }, token: IosPushNotificationPermissiongGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { Dialogs } from '@ionic-native/dialogs/ngx';
class PeyUnifiedNotificationsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PeyUnifiedNotificationsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pey-unified-notifications',
                template: `
    <p>
      pey-unified-notifications works!
    </p>
  `
            }] }
];
/** @nocollapse */
PeyUnifiedNotificationsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PeyUnifiedNotificationsModule {
}
PeyUnifiedNotificationsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PeyUnifiedNotificationsComponent],
                imports: [],
                exports: [PeyUnifiedNotificationsComponent],
                providers: [
                    Dialogs,
                    Firebase
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UnifiedFirebaseMessagingService, IosPushNotificationPermissiongGuard, PeyUnifiedNotificationsModule, PeyUnifiedNotificationsComponent as ɵd, PlatformHelperService as ɵc, MobileFirebaseMessagingService as ɵa, WebFirebaseMessagingService as ɵb };

//# sourceMappingURL=pey-unified-notifications.js.map