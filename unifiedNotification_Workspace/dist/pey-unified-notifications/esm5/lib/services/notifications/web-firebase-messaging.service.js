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
    /**
     * @type {?}
     * @private
     */
    WebFirebaseMessagingService.prototype.angularFireMessaging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRXZDO0lBV0UscUNBQ1Usb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFQbEQsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ2hELFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLFlBQU8sR0FBRSxJQUFJLENBQUM7SUFLaEIsQ0FBQzs7OztJQUNDLGlEQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDSCwwQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDM0MsVUFBQyxVQUFVO1lBQ1QsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3RCxVQUFVLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FDRixDQUFDO1FBQ0YsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Qsc0RBQXNEOzs7OztJQUN0RCxzREFBZ0I7Ozs7O0lBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCw4Q0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZO2FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUM7YUFDbkMsU0FBUyxDQUNOLFVBQUMsS0FBSztZQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFDRCxVQUFDLEdBQUc7WUFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FDSixDQUFDO0lBQ1IsQ0FBQzs7OztJQUNELG9EQUFjOzs7SUFBZDtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVE7YUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQUMsQ0FBQzthQUNuQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ1gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDOzs7O0lBQ0Qsb0RBQWM7OztJQUFkO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWTthQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDWixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNSLENBQUM7O2dCQTFERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLG9CQUFvQjs7O3NDQUQ3QjtDQWlFQyxBQTVERCxJQTREQztTQXpEWSwyQkFBMkI7OztJQUVwQyxpREFBZ0Q7O0lBQ2hELDRDQUEwQzs7SUFDMUMscURBQTJDOztJQUUzQyw4Q0FBYzs7Ozs7SUFHZCwyREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTWVzc2FnaW5nIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveXtcblxuICAgIHBlcm1pc3Npb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xuICAgIHRva2VuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICAgIGN1cnJlbnRNZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICAgIGlzQWxpdmU9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFyRmlyZU1lc3NhZ2luZzogQW5ndWxhckZpcmVNZXNzYWdpbmcpIHtcblxuICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLm1lc3NhZ2luZy5zdWJzY3JpYmUoXG4gICAgICAoX21lc3NhZ2luZykgPT4ge1xuICAgICAgICBfbWVzc2FnaW5nLm9uTWVzc2FnZSA9IF9tZXNzYWdpbmcub25NZXNzYWdlLmJpbmQoX21lc3NhZ2luZyk7XG4gICAgICAgIF9tZXNzYWdpbmcub25Ub2tlblJlZnJlc2ggPSBfbWVzc2FnaW5nLm9uVG9rZW5SZWZyZXNoLmJpbmQoX21lc3NhZ2luZyk7XG4gICAgICB9XG4gICAgKTtcbiAgICAvLyB0aGlzLmdldFRva2VuKCk7XG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSgpOyBcbiAgfVxuICAvL29uIHdlYiBnZXR0aW5nIHRoZSB0b2tlbiBtZWFucyBhc2tpbmcgZm9yIHBlcm1pc3Npb25cbiAgdXBkYXRlUGVybWlzc2lvbigpIHtcbiAgICAgIHRoaXMuZ2V0VG9rZW4oKTtcbiAgfVxuICBnZXRUb2tlbigpIHtcbiAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLnJlcXVlc3RUb2tlblxuICAgICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh0b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBnZXQgcGVybWlzc2lvbiB0byBub3RpZnkuJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgfVxuICByZWNlaXZlTWVzc2FnZSgpIHtcbiAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLm1lc3NhZ2VzXG4gICAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKVxuICAgICAgICAuc3Vic2NyaWJlKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZS5uZXh0KHBheWxvYWQpO1xuICAgICAgICB9KTtcbiAgfVxuICBvblRva2VuUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuYW5ndWxhckZpcmVNZXNzYWdpbmcudG9rZW5DaGFuZ2VzXG4gICAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKVxuICAgICAgICAuc3Vic2NyaWJlKHRva2VuID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh0b2tlbik7XG4gICAgICAgIH0pXG4gIH1cblxufVxuIl19