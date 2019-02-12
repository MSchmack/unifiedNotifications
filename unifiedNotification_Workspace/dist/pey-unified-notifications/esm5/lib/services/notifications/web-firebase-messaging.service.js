/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.angularFireMessaging.messaging.pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.isAlive; }))).subscribe((/**
         * @param {?} _messaging
         * @return {?}
         */
        function (_messaging) {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        }));
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
            .pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.isAlive; })))
            .subscribe((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            _this.token.next(token);
            _this.permission.next(true);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.error('Unable to get permission to notify.', err);
        }));
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
            .pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.isAlive; })))
            .subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            _this.currentMessage.next(payload);
        }));
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
            .pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.isAlive; })))
            .subscribe((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            _this.token.next(token);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7O0FBRWhEO0lBWUUscUNBQ1Usb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFSbEQsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ2hELFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLFlBQU8sR0FBRSxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBSWYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBQ0MsaURBQVc7OztJQUFYO1FBQWdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNILDBDQUFJOzs7SUFBSjtRQUFBLGlCQVVDO1FBUkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQy9FLFVBQUMsVUFBVTtZQUNULFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0QsVUFBVSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RSxDQUFDLEVBQ0YsQ0FBQztRQUNGLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELHNEQUFzRDs7Ozs7SUFDdEQsc0RBQWdCOzs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBQ0QsOENBQVE7OztJQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWTthQUNqQyxJQUFJLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxFQUFDLENBQUM7YUFDbkMsU0FBUzs7OztRQUNOLFVBQUMsS0FBSztZQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7Ozs7UUFDRCxVQUFDLEdBQUc7WUFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUMsRUFDSixDQUFDO1FBQ0osT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUNELG9EQUFjOzs7SUFBZDtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVE7YUFDN0IsSUFBSSxDQUFDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksRUFBQyxDQUFDO2FBQ25DLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU87WUFDWCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNULENBQUM7Ozs7SUFDRCxvREFBYzs7O0lBQWQ7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZO2FBQ25DLElBQUksQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBWixDQUFZLEVBQUMsQ0FBQzthQUNuQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1osS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUE7SUFDUixDQUFDOztnQkE5REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxvQkFBb0I7OztzQ0FEN0I7Q0FxRUMsQUFoRUQsSUFnRUM7U0E3RFksMkJBQTJCOzs7SUFFcEMsaURBQWdEOztJQUNoRCw0Q0FBMEM7O0lBQzFDLHFEQUEyQzs7SUFFM0MsOENBQWM7O0lBQ2QsK0NBQWlCOzs7OztJQUdqQiwyREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTWVzc2FnaW5nIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveXtcblxuICAgIHBlcm1pc3Npb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xuICAgIHRva2VuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICAgIGN1cnJlbnRNZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICAgIGlzQWxpdmU9IHRydWU7XG4gICAgaXNBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuZ3VsYXJGaXJlTWVzc2FnaW5nOiBBbmd1bGFyRmlyZU1lc3NhZ2luZykge1xuICAgICAgY29uc29sZS5sb2coJ3dlYicpO1xuICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7IGNvbnNvbGUubG9nKCd3ZWJkZWFkJyk7XG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICBpbml0KCkge1xuXG4gICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy5tZXNzYWdpbmcucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSkuc3Vic2NyaWJlKFxuICAgICAgKF9tZXNzYWdpbmcpID0+IHtcbiAgICAgICAgX21lc3NhZ2luZy5vbk1lc3NhZ2UgPSBfbWVzc2FnaW5nLm9uTWVzc2FnZS5iaW5kKF9tZXNzYWdpbmcpO1xuICAgICAgICBfbWVzc2FnaW5nLm9uVG9rZW5SZWZyZXNoID0gX21lc3NhZ2luZy5vblRva2VuUmVmcmVzaC5iaW5kKF9tZXNzYWdpbmcpO1xuICAgICAgfSBcbiAgICApO1xuICAgIC8vIHRoaXMuZ2V0VG9rZW4oKTtcbiAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKCk7IFxuICB9XG4gIC8vb24gd2ViIGdldHRpbmcgdGhlIHRva2VuIG1lYW5zIGFza2luZyBmb3IgcGVybWlzc2lvblxuICB1cGRhdGVQZXJtaXNzaW9uKCkge1xuICAgIHRoaXMuZ2V0VG9rZW4oKTtcbiAgfVxuICBnZXRUb2tlbigpIHtcbiAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLnJlcXVlc3RUb2tlblxuICAgICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh0b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBnZXQgcGVybWlzc2lvbiB0byBub3RpZnkuJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlY2VpdmVNZXNzYWdlKCkge1xuICAgIHRoaXMuYW5ndWxhckZpcmVNZXNzYWdpbmcubWVzc2FnZXNcbiAgICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlLm5leHQocGF5bG9hZCk7XG4gICAgICAgIH0pO1xuICB9XG4gIG9uVG9rZW5SZWZyZXNoKCkge1xuICAgICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy50b2tlbkNoYW5nZXNcbiAgICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSkpXG4gICAgICAgIC5zdWJzY3JpYmUodG9rZW4gPT4ge1xuICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHRva2VuKTtcbiAgICAgICAgfSlcbiAgfVxuXG59XG4iXX0=