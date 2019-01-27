(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ionic-native/firebase/ngx/index'), require('@angular/fire/messaging'), require('rxjs/operators'), require('rxjs'), require('@ionic/angular'), require('@ionic/angular/dist/providers/platform'), require('@ionic-native/dialogs/ngx/index'), require('@angular/core'), require('@ionic-native/dialogs/ngx'), require('@ionic-native/firebase/ngx')) :
    typeof define === 'function' && define.amd ? define('pey-unified-notifications', ['exports', '@ionic-native/firebase/ngx/index', '@angular/fire/messaging', 'rxjs/operators', 'rxjs', '@ionic/angular', '@ionic/angular/dist/providers/platform', '@ionic-native/dialogs/ngx/index', '@angular/core', '@ionic-native/dialogs/ngx', '@ionic-native/firebase/ngx'], factory) :
    (factory((global['pey-unified-notifications'] = {}),global.i1,global.ng.fire.messaging,global.rxjs.operators,global.rxjs,global.angular,global.i1$2,global.i2,global.ng.core,global.ngx,global.ngx$1));
}(this, (function (exports,i1,i1$1,operators,rxjs,angular,i1$2,i2,i0,ngx,ngx$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MobileFirebaseMessagingService = /** @class */ (function () {
        function MobileFirebaseMessagingService(firebase) {
            this.firebase = firebase;
            this.permission = new rxjs.BehaviorSubject(null);
            this.token = new rxjs.BehaviorSubject(null);
            this.currentMessage = new rxjs.BehaviorSubject(null);
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
                    .pipe(operators.takeWhile(function () { return _this.isAlive; }))
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
                    .pipe(operators.takeWhile(function () { return _this.isAlive; }))
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MobileFirebaseMessagingService.ctorParameters = function () {
            return [
                { type: ngx$1.Firebase }
            ];
        };
        /** @nocollapse */ MobileFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function MobileFirebaseMessagingService_Factory() { return new MobileFirebaseMessagingService(i0.inject(i1.Firebase)); }, token: MobileFirebaseMessagingService, providedIn: "root" });
        return MobileFirebaseMessagingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WebFirebaseMessagingService = /** @class */ (function () {
        function WebFirebaseMessagingService(angularFireMessaging) {
            this.angularFireMessaging = angularFireMessaging;
            this.permission = new rxjs.BehaviorSubject(null);
            this.token = new rxjs.BehaviorSubject(null);
            this.currentMessage = new rxjs.BehaviorSubject(null);
            this.isAlive = true;
            this.isActive = false;
            console.log('web');
        }
        /**
         * @return {?}
         */
        WebFirebaseMessagingService.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                console.log('webdead');
                this.isAlive = false;
                this.isActive = false;
            };
        /**
         * @return {?}
         */
        WebFirebaseMessagingService.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.angularFireMessaging.messaging.pipe(operators.takeWhile(function () { return _this.isAlive; })).subscribe(function (_messaging) {
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
                    .pipe(operators.takeWhile(function () { return _this.isAlive; }))
                    .subscribe(function (token) {
                    _this.token.next(token);
                    _this.permission.next(true);
                }, function (err) {
                    console.error('Unable to get permission to notify.', err);
                });
                return true;
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
                    .pipe(operators.takeWhile(function () { return _this.isAlive; }))
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
                    .pipe(operators.takeWhile(function () { return _this.isAlive; }))
                    .subscribe(function (token) {
                    _this.token.next(token);
                });
            };
        WebFirebaseMessagingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WebFirebaseMessagingService.ctorParameters = function () {
            return [
                { type: i1$1.AngularFireMessaging }
            ];
        };
        /** @nocollapse */ WebFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function WebFirebaseMessagingService_Factory() { return new WebFirebaseMessagingService(i0.inject(i1$1.AngularFireMessaging)); }, token: WebFirebaseMessagingService, providedIn: "root" });
        return WebFirebaseMessagingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UnifiedFirebaseMessagingService = /** @class */ (function () {
        function UnifiedFirebaseMessagingService(mobileNotifications, webNotifications, platformService) {
            this.mobileNotifications = mobileNotifications;
            this.webNotifications = webNotifications;
            this.platformService = platformService;
            // currentMessage = new Subject();
            this.currentMessage = new rxjs.BehaviorSubject(null);
            this.token = new rxjs.BehaviorSubject(null);
            this.IsActive = false;
            this.isAlive = true;
            //  only relevant on ios
            this.permission = new rxjs.BehaviorSubject(null);
        }
        /**
         * @param {?} isNative
         * @return {?}
         */
        UnifiedFirebaseMessagingService.prototype.init = /**
         * @param {?} isNative
         * @return {?}
         */
            function (isNative) {
                this.isNative = isNative;
                if (isNative) {
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
                if (this.isNative) {
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
                if (this.isNative) {
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
                if (this.isNative) {
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
                if (this.platformService.is('ios') && this.isNative) {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UnifiedFirebaseMessagingService.ctorParameters = function () {
            return [
                { type: MobileFirebaseMessagingService },
                { type: WebFirebaseMessagingService },
                { type: angular.Platform }
            ];
        };
        /** @nocollapse */ UnifiedFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function UnifiedFirebaseMessagingService_Factory() { return new UnifiedFirebaseMessagingService(i0.inject(MobileFirebaseMessagingService), i0.inject(WebFirebaseMessagingService), i0.inject(i1$2.Platform)); }, token: UnifiedFirebaseMessagingService, providedIn: "root" });
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        IosPushNotificationPermissiongGuard.ctorParameters = function () {
            return [
                { type: angular.Platform },
                { type: ngx.Dialogs },
                { type: UnifiedFirebaseMessagingService }
            ];
        };
        /** @nocollapse */ IosPushNotificationPermissiongGuard.ngInjectableDef = i0.defineInjectable({ factory: function IosPushNotificationPermissiongGuard_Factory() { return new IosPushNotificationPermissiongGuard(i0.inject(i1$2.Platform), i0.inject(i2.Dialogs), i0.inject(UnifiedFirebaseMessagingService)); }, token: IosPushNotificationPermissiongGuard, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        declarations: [PeyUnifiedNotificationsComponent],
                        imports: [],
                        exports: [PeyUnifiedNotificationsComponent],
                        providers: [
                            ngx.Dialogs,
                            ngx$1.Firebase
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

    exports.UnifiedFirebaseMessagingService = UnifiedFirebaseMessagingService;
    exports.IosPushNotificationPermissiongGuard = IosPushNotificationPermissiongGuard;
    exports.PeyUnifiedNotificationsModule = PeyUnifiedNotificationsModule;
    exports.ɵc = PeyUnifiedNotificationsComponent;
    exports.ɵa = MobileFirebaseMessagingService;
    exports.ɵb = WebFirebaseMessagingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=pey-unified-notifications.umd.js.map