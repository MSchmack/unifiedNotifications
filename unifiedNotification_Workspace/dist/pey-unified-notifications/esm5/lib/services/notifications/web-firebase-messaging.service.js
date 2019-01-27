/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { takeWhile } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/messaging";
var WebFirebaseMessagingService = /** @class */ (function () {
    function WebFirebaseMessagingService(angularFireMessaging) {
        this.angularFireMessaging = angularFireMessaging;
        this.permission = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.currentMessage = new BehaviorSubject(null);
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
        this.angularFireMessaging.messaging.pipe(takeWhile(function () { return _this.isAlive; })).subscribe(function (_messaging) {
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
    /** @nocollapse */ WebFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function WebFirebaseMessagingService_Factory() { return new WebFirebaseMessagingService(i0.inject(i1.AngularFireMessaging)); }, token: WebFirebaseMessagingService, providedIn: "root" });
    return WebFirebaseMessagingService;
}());
export { WebFirebaseMessagingService };
if (false) {
    /** @type {?} */
    WebFirebaseMessagingService.prototype.permission;
    /** @type {?} */
    WebFirebaseMessagingService.prototype.token;
    /** @type {?} */
    WebFirebaseMessagingService.prototype.currentMessage;
    /** @type {?} */
    WebFirebaseMessagingService.prototype.isAlive;
    /** @type {?} */
    WebFirebaseMessagingService.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    WebFirebaseMessagingService.prototype.angularFireMessaging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7O0FBRWhEO0lBWUUscUNBQ1Usb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFSbEQsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ2hELFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLFlBQU8sR0FBRSxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBSWYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBQ0MsaURBQVc7OztJQUFYO1FBQWdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNILDBDQUFJOzs7SUFBSjtRQUFBLGlCQVVDO1FBUkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUMvRSxVQUFDLFVBQVU7WUFDVCxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdELFVBQVUsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUNGLENBQUM7UUFDRixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxzREFBc0Q7Ozs7O0lBQ3RELHNEQUFnQjs7Ozs7SUFBaEI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUNELDhDQUFROzs7SUFBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVk7YUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQUMsQ0FBQzthQUNuQyxTQUFTLENBQ04sVUFBQyxLQUFLO1lBQ0YsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUNELFVBQUMsR0FBRztZQUNBLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUNKLENBQUM7UUFDSixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7O0lBQ0Qsb0RBQWM7OztJQUFkO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUTthQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDWCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7Ozs7SUFDRCxvREFBYzs7O0lBQWQ7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZO2FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUM7YUFDbkMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNaLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQzs7Z0JBOURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsb0JBQW9COzs7c0NBRDdCO0NBcUVDLEFBaEVELElBZ0VDO1NBN0RZLDJCQUEyQjs7O0lBRXBDLGlEQUFnRDs7SUFDaEQsNENBQTBDOztJQUMxQyxxREFBMkM7O0lBRTNDLDhDQUFjOztJQUNkLCtDQUFpQjs7Ozs7SUFHakIsMkRBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZU1lc3NhZ2luZyB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvbWVzc2FnaW5nJztcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXZWJGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3l7XG5cbiAgICBwZXJtaXNzaW9uID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTtcbiAgICB0b2tlbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcbiAgICBjdXJyZW50TWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgICBpc0FsaXZlPSB0cnVlO1xuICAgIGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFyRmlyZU1lc3NhZ2luZzogQW5ndWxhckZpcmVNZXNzYWdpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWInKTtcbiAgfVxuICAgIG5nT25EZXN0cm95KCkgeyBjb25zb2xlLmxvZygnd2ViZGVhZCcpO1xuICAgICAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgaW5pdCgpIHtcblxuICAgIHRoaXMuYW5ndWxhckZpcmVNZXNzYWdpbmcubWVzc2FnaW5nLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSkpLnN1YnNjcmliZShcbiAgICAgIChfbWVzc2FnaW5nKSA9PiB7XG4gICAgICAgIF9tZXNzYWdpbmcub25NZXNzYWdlID0gX21lc3NhZ2luZy5vbk1lc3NhZ2UuYmluZChfbWVzc2FnaW5nKTtcbiAgICAgICAgX21lc3NhZ2luZy5vblRva2VuUmVmcmVzaCA9IF9tZXNzYWdpbmcub25Ub2tlblJlZnJlc2guYmluZChfbWVzc2FnaW5nKTtcbiAgICAgIH0gXG4gICAgKTtcbiAgICAvLyB0aGlzLmdldFRva2VuKCk7XG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSgpOyBcbiAgfVxuICAvL29uIHdlYiBnZXR0aW5nIHRoZSB0b2tlbiBtZWFucyBhc2tpbmcgZm9yIHBlcm1pc3Npb25cbiAgdXBkYXRlUGVybWlzc2lvbigpIHtcbiAgICB0aGlzLmdldFRva2VuKCk7XG4gIH1cbiAgZ2V0VG9rZW4oKSB7XG4gICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy5yZXF1ZXN0VG9rZW5cbiAgICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSkpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbi5uZXh0KHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZ2V0IHBlcm1pc3Npb24gdG8gbm90aWZ5LicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWNlaXZlTWVzc2FnZSgpIHtcbiAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLm1lc3NhZ2VzXG4gICAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKVxuICAgICAgICAuc3Vic2NyaWJlKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZS5uZXh0KHBheWxvYWQpO1xuICAgICAgICB9KTtcbiAgfVxuICBvblRva2VuUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuYW5ndWxhckZpcmVNZXNzYWdpbmcudG9rZW5DaGFuZ2VzXG4gICAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKVxuICAgICAgICAuc3Vic2NyaWJlKHRva2VuID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh0b2tlbik7XG4gICAgICAgIH0pXG4gIH1cblxufVxuIl19