/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// declare var FirebasePlugin;
import { Firebase } from '@ionic-native/firebase/ngx';
import { takeWhile } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@ionic-native/firebase/ngx/index";
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
            .then((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            _this.token.next(token);
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return console.log(err); }));
        this.firebase.onTokenRefresh()
            .pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.isAlive; })))
            .subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            //posts on update
            if (x) {
                if (x !== _this.token) {
                    _this.token.next(x);
                }
            }
        }));
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
            .pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.isAlive; })))
            .subscribe((/**
         * @param {?} notification
         * @return {?}
         */
        function (notification) {
            _this.currentMessage.next(notification);
        }));
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
            .then((/**
         * @param {?} permission
         * @return {?}
         */
        function (permission) {
            _this.permission.next(permission);
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return console.log(err); }));
        this.firebase.hasPermission()
            .then((/**
         * @param {?} perm
         * @return {?}
         */
        function (perm) {
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return console.log(err); }));
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.hasPermission = /**
     * @return {?}
     */
    function () {
        return this.firebase.hasPermission()
            .then((/**
         * @param {?} perm
         * @return {?}
         */
        function (perm) {
            return perm.isEnabled;
        }));
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
    /** @nocollapse */ MobileFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function MobileFirebaseMessagingService_Factory() { return new MobileFirebaseMessagingService(i0.inject(i1.Firebase)); }, token: MobileFirebaseMessagingService, providedIn: "root" });
    return MobileFirebaseMessagingService;
}());
export { MobileFirebaseMessagingService };
if (false) {
    /** @type {?} */
    MobileFirebaseMessagingService.prototype.permission;
    /** @type {?} */
    MobileFirebaseMessagingService.prototype.token;
    /** @type {?} */
    MobileFirebaseMessagingService.prototype.currentMessage;
    /** @type {?} */
    MobileFirebaseMessagingService.prototype.isAlive;
    /**
     * @type {?}
     * @private
     */
    MobileFirebaseMessagingService.prototype.firebase;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL21vYmlsZS1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFXLE1BQU0sTUFBTSxDQUFDOztBQUdoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHM0M7SUFZRSx3Q0FDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUjVCLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFFMUMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQyxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBSVgsQ0FBQzs7OztJQUVMLG9EQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDRCw2Q0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELGlEQUFROzs7SUFBUjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTthQUNuQixJQUFJOzs7O1FBQUUsVUFBQSxLQUFLO1lBQ1YsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMs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bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbi8vIGRlY2xhcmUgdmFyIEZpcmViYXNlUGx1Z2luO1xyXG5pbXBvcnQgeyBGaXJlYmFzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlyZWJhc2Uvbmd4JztcclxuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vYmlsZUZpcmViYXNlTWVzc2FnaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHBlcm1pc3Npb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xyXG4gIHRva2VuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG5cclxuICBjdXJyZW50TWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcblxyXG4gIGlzQWxpdmUgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmlyZWJhc2U6IEZpcmViYXNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIHRoaXMuaW5pdE5vdGlmaWNhdGlvbnMoKTtcclxuICB9XHJcbiAgZ2V0VG9rZW4oKSB7IFxyXG4gICAgdGhpcy5maXJlYmFzZS5nZXRUb2tlbigpXHJcbiAgICAgICAgLnRoZW4oIHRva2VuID0+IHtcclxuICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh0b2tlbik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5cclxuICAgIHRoaXMuZmlyZWJhc2Uub25Ub2tlblJlZnJlc2goKVxyXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcclxuICAgICAgLnN1YnNjcmliZSggeCA9PiB7XHJcbiAgICAgICAgLy9wb3N0cyBvbiB1cGRhdGVcclxuICAgICAgICBpZih4KSB7XHJcbiAgICAgICAgICBpZih4ICE9PSB0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBpbml0Tm90aWZpY2F0aW9ucygpIHsgXHJcbiAgICB0aGlzLmZpcmViYXNlLm9uTm90aWZpY2F0aW9uT3BlbigpXHJcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKVxyXG4gICAgICAuc3Vic2NyaWJlKCBub3RpZmljYXRpb24gPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZS5uZXh0KG5vdGlmaWNhdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBqb2luR3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coJ3N1YnNjcmliZSB0byBncm91cCcgKyBpZCk7XHJcbiAgICB0aGlzLmZpcmViYXNlLnN1YnNjcmliZShpZCk7XHJcbiAgfVxyXG4gIGxlYXZlR3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJlIHRvIGdyb3VwJyArIGlkKTtcclxuICAgIHRoaXMuZmlyZWJhc2UudW5zdWJzY3JpYmUoaWQpO1xyXG4gIH1cclxuICB1cGRhdGVQZXJtaXNzaW9uKCkge1xyXG4gICAgdGhpcy5maXJlYmFzZS5ncmFudFBlcm1pc3Npb24oKVxyXG4gICAgICAudGhlbihwZXJtaXNzaW9uID0+IHtcclxuICAgICAgICB0aGlzLnBlcm1pc3Npb24ubmV4dChwZXJtaXNzaW9uKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIHRoaXMuZmlyZWJhc2UuaGFzUGVybWlzc2lvbigpXHJcbiAgICAgIC50aGVuKHBlcm0gPT4gIHtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLmhhc1Blcm1pc3Npb24oKVxyXG4gICAgICAgICAgICAgIC50aGVuKHBlcm0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcm0uaXNFbmFibGVkO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gIH1cclxufSJdfQ==