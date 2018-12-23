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
var MobileFirebaseMessagingService = /** @class */ (function () {
    function MobileFirebaseMessagingService(firebase) {
        this.firebase = firebase;
        this.permission = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.currentMessage = new BehaviorSubject(null);
        this.isAlive = true;
    }
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isAlive = false;
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.init = /**
     * @return {?}
     */
    function () {
        this.getToken();
        this.initNotifications();
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.firebase.getToken()
            .then(function (token) {
            _this.token.next(token);
        })
            .catch(function (err) { return console.log(err); });
        this.firebase.onTokenRefresh()
            .pipe(takeWhile(function () { return _this.isAlive; }))
            .subscribe(function (x) {
            //posts on update
            if (x) {
                if (x !== _this.token) {
                    _this.token.next(x);
                }
            }
        });
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.initNotifications = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.firebase.onNotificationOpen()
            .pipe(takeWhile(function () { return _this.isAlive; }))
            .subscribe(function (notification) {
            _this.currentMessage.next(notification);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.joinGroup = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        console.log('subscribe to group' + id);
        this.firebase.subscribe(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.leaveGroup = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        console.log('unsubscribe to group' + id);
        this.firebase.unsubscribe(id);
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.updatePermission = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.firebase.grantPermission()
            .then(function (permission) {
            _this.permission.next(permission);
        })
            .catch(function (err) { return console.log(err); });
        this.firebase.hasPermission()
            .then(function (perm) {
            console.log('permission');
            console.log(perm);
        })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.hasPermission = /**
     * @return {?}
     */
    function () {
        return this.firebase.hasPermission()
            .then(function (perm) {
            return perm.isEnabled;
        });
    };
    MobileFirebaseMessagingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MobileFirebaseMessagingService.ctorParameters = function () { return [
        { type: Firebase }
    ]; };
    /** @nocollapse */ MobileFirebaseMessagingService.ngInjectableDef = defineInjectable({ factory: function MobileFirebaseMessagingService_Factory() { return new MobileFirebaseMessagingService(inject(Firebase$1)); }, token: MobileFirebaseMessagingService, providedIn: "root" });
    return MobileFirebaseMessagingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlatformHelperService = /** @class */ (function () {
    function PlatformHelperService(platformService) {
        this.platformService = platformService;
    }
    Object.defineProperty(PlatformHelperService.prototype, "isNative", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    PlatformHelperService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PlatformHelperService.ctorParameters = function () { return [
        { type: Platform }
    ]; };
    /** @nocollapse */ PlatformHelperService.ngInjectableDef = defineInjectable({ factory: function PlatformHelperService_Factory() { return new PlatformHelperService(inject(Platform$1)); }, token: PlatformHelperService, providedIn: "root" });
    return PlatformHelperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebFirebaseMessagingService = /** @class */ (function () {
    function WebFirebaseMessagingService(angularFireMessaging) {
        this.angularFireMessaging = angularFireMessaging;
        this.permission = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.currentMessage = new BehaviorSubject(null);
        this.isAlive = true;
    }
    /**
     * @return {?}
     */
    WebFirebaseMessagingService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isAlive = false;
    };
    /**
     * @return {?}
     */
    WebFirebaseMessagingService.prototype.init = /**
     * @return {?}
     */
    function () {
        this.angularFireMessaging.messaging.subscribe(function (_messaging) {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
        // this.getToken();
        this.receiveMessage();
    };
    //on web getting the token means asking for permission
    //on web getting the token means asking for permission
    /**
     * @return {?}
     */
    WebFirebaseMessagingService.prototype.updatePermission = 
    //on web getting the token means asking for permission
    /**
     * @return {?}
     */
    function () {
        this.getToken();
    };
    /**
     * @return {?}
     */
    WebFirebaseMessagingService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.angularFireMessaging.requestToken
            .pipe(takeWhile(function () { return _this.isAlive; }))
            .subscribe(function (token) {
            _this.token.next(token);
            _this.permission.next(true);
        }, function (err) {
            console.error('Unable to get permission to notify.', err);
        });
    };
    /**
     * @return {?}
     */
    WebFirebaseMessagingService.prototype.receiveMessage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.angularFireMessaging.messages
            .pipe(takeWhile(function () { return _this.isAlive; }))
            .subscribe(function (payload) {
            _this.currentMessage.next(payload);
        });
    };
    /**
     * @return {?}
     */
    WebFirebaseMessagingService.prototype.onTokenRefresh = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.angularFireMessaging.tokenChanges
            .pipe(takeWhile(function () { return _this.isAlive; }))
            .subscribe(function (token) {
            _this.token.next(token);
        });
    };
    WebFirebaseMessagingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WebFirebaseMessagingService.ctorParameters = function () { return [
        { type: AngularFireMessaging }
    ]; };
    /** @nocollapse */ WebFirebaseMessagingService.ngInjectableDef = defineInjectable({ factory: function WebFirebaseMessagingService_Factory() { return new WebFirebaseMessagingService(inject(AngularFireMessaging)); }, token: WebFirebaseMessagingService, providedIn: "root" });
    return WebFirebaseMessagingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UnifiedFirebaseMessagingService = /** @class */ (function () {
    function UnifiedFirebaseMessagingService(mobileNotifications, webNotifications, platformHelper, platformService) {
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
    UnifiedFirebaseMessagingService.prototype.init = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.joinGroup = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.joinGroup(id);
        }
        else {
            console.log('web topic/group subscriptions have to be resolved serverside');
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.leaveGroup = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.leaveGroup(id);
        }
        else {
            console.log('web topic/group subscriptions have to be resolved serverside');
        }
    };
    /**
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.updatePermission = /**
     * @return {?}
     */
    function () {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.updatePermission();
        }
        else {
            this.webNotifications.getToken();
        }
    };
    // only works on iOS other platforms dont need permissions
    // only works on iOS other platforms dont need permissions
    /**
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.hasPermission = 
    // only works on iOS other platforms dont need permissions
    /**
     * @return {?}
     */
    function () {
        if (this.platformService.is('ios') && this.platformHelper.isNative) {
            return this.mobileNotifications.hasPermission()
                .then(function (res) {
                console.log(res);
                return res;
            });
        }
        {
            return new Promise(function () {
                return true;
            });
        }
    };
    UnifiedFirebaseMessagingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UnifiedFirebaseMessagingService.ctorParameters = function () { return [
        { type: MobileFirebaseMessagingService },
        { type: WebFirebaseMessagingService },
        { type: PlatformHelperService },
        { type: Platform }
    ]; };
    /** @nocollapse */ UnifiedFirebaseMessagingService.ngInjectableDef = defineInjectable({ factory: function UnifiedFirebaseMessagingService_Factory() { return new UnifiedFirebaseMessagingService(inject(MobileFirebaseMessagingService), inject(WebFirebaseMessagingService), inject(PlatformHelperService), inject(Platform$1)); }, token: UnifiedFirebaseMessagingService, providedIn: "root" });
    return UnifiedFirebaseMessagingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IosPushNotificationPermissiongGuard = /** @class */ (function () {
    function IosPushNotificationPermissiongGuard(platformService, dialogs, unifiedNotificationService) {
        this.platformService = platformService;
        this.dialogs = dialogs;
        this.unifiedNotificationService = unifiedNotificationService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    IosPushNotificationPermissiongGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        var _this = this;
        if (!this.platformService.is('ios')) {
            return true;
        }
        return this.unifiedNotificationService.hasPermission().then(function (res) {
            if (res) {
                return true;
            }
            else {
                return _this.dialogs.alert('This app requires push notifications to work as intended.\nYou can turn them silent any time you want.', 'Important')
                    .then(function () {
                    _this.unifiedNotificationService.updatePermission();
                    return true;
                })
                    .catch(function (e) {
                    console.log(e);
                    return true;
                });
            }
        });
        return false;
    };
    IosPushNotificationPermissiongGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IosPushNotificationPermissiongGuard.ctorParameters = function () { return [
        { type: Platform },
        { type: Dialogs },
        { type: UnifiedFirebaseMessagingService }
    ]; };
    /** @nocollapse */ IosPushNotificationPermissiongGuard.ngInjectableDef = defineInjectable({ factory: function IosPushNotificationPermissiongGuard_Factory() { return new IosPushNotificationPermissiongGuard(inject(Platform$1), inject(Dialogs$1), inject(UnifiedFirebaseMessagingService)); }, token: IosPushNotificationPermissiongGuard, providedIn: "root" });
    return IosPushNotificationPermissiongGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { Dialogs } from '@ionic-native/dialogs/ngx';
var PeyUnifiedNotificationsComponent = /** @class */ (function () {
    function PeyUnifiedNotificationsComponent() {
    }
    /**
     * @return {?}
     */
    PeyUnifiedNotificationsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PeyUnifiedNotificationsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-pey-unified-notifications',
                    template: "\n    <p>\n      pey-unified-notifications works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    PeyUnifiedNotificationsComponent.ctorParameters = function () { return []; };
    return PeyUnifiedNotificationsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PeyUnifiedNotificationsModule = /** @class */ (function () {
    function PeyUnifiedNotificationsModule() {
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
    return PeyUnifiedNotificationsModule;
}());

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