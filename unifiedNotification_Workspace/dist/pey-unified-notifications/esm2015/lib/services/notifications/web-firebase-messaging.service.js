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
export class WebFirebaseMessagingService {
    /**
     * @param {?} angularFireMessaging
     */
    constructor(angularFireMessaging) {
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
    ngOnDestroy() {
        console.log('webdead');
        this.isAlive = false;
        this.isActive = false;
    }
    /**
     * @return {?}
     */
    init() {
        this.angularFireMessaging.messaging.pipe(takeWhile((/**
         * @return {?}
         */
        () => this.isAlive))).subscribe((/**
         * @param {?} _messaging
         * @return {?}
         */
        (_messaging) => {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        }));
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
            .pipe(takeWhile((/**
         * @return {?}
         */
        () => this.isAlive)))
            .subscribe((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            this.token.next(token);
            this.permission.next(true);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.error('Unable to get permission to notify.', err);
        }));
        return true;
    }
    /**
     * @return {?}
     */
    receiveMessage() {
        this.angularFireMessaging.messages
            .pipe(takeWhile((/**
         * @return {?}
         */
        () => this.isAlive)))
            .subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            this.currentMessage.next(payload);
        }));
    }
    /**
     * @return {?}
     */
    onTokenRefresh() {
        this.angularFireMessaging.tokenChanges
            .pipe(takeWhile((/**
         * @return {?}
         */
        () => this.isAlive)))
            .subscribe((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            this.token.next(token);
        }));
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
/** @nocollapse */ WebFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function WebFirebaseMessagingService_Factory() { return new WebFirebaseMessagingService(i0.inject(i1.AngularFireMessaging)); }, token: WebFirebaseMessagingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7O0FBS2hELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFTdEMsWUFDVSxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVJsRCxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDaEQsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsWUFBTyxHQUFFLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFJZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDQyxXQUFXO1FBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0gsSUFBSTtRQUVGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDL0UsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNiLFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0QsVUFBVSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RSxDQUFDLEVBQ0YsQ0FBQztRQUNGLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWTthQUNqQyxJQUFJLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQ25DLFNBQVM7Ozs7UUFDTixDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7OztRQUNELENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUMsRUFDSixDQUFDO1FBQ0osT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUNELGNBQWM7UUFDWixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUTthQUM3QixJQUFJLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQ25DLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDVCxDQUFDOzs7O0lBQ0QsY0FBYztRQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZO2FBQ25DLElBQUksQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDbkMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUE7SUFDUixDQUFDOzs7WUE5REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsb0JBQW9COzs7OztJQVN6QixpREFBZ0Q7O0lBQ2hELDRDQUEwQzs7SUFDMUMscURBQTJDOztJQUUzQyw4Q0FBYzs7SUFDZCwrQ0FBaUI7Ozs7O0lBR2pCLDJEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVNZXNzYWdpbmcgfSBmcm9tICdAYW5ndWxhci9maXJlL21lc3NhZ2luZyc7XG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2ViRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95e1xuXG4gICAgcGVybWlzc2lvbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7XG4gICAgdG9rZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG4gICAgY3VycmVudE1lc3NhZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gICAgaXNBbGl2ZT0gdHJ1ZTtcbiAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5ndWxhckZpcmVNZXNzYWdpbmc6IEFuZ3VsYXJGaXJlTWVzc2FnaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnd2ViJyk7XG4gIH1cbiAgICBuZ09uRGVzdHJveSgpIHsgY29uc29sZS5sb2coJ3dlYmRlYWQnKTtcbiAgICAgICAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIGluaXQoKSB7XG5cbiAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLm1lc3NhZ2luZy5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKS5zdWJzY3JpYmUoXG4gICAgICAoX21lc3NhZ2luZykgPT4ge1xuICAgICAgICBfbWVzc2FnaW5nLm9uTWVzc2FnZSA9IF9tZXNzYWdpbmcub25NZXNzYWdlLmJpbmQoX21lc3NhZ2luZyk7XG4gICAgICAgIF9tZXNzYWdpbmcub25Ub2tlblJlZnJlc2ggPSBfbWVzc2FnaW5nLm9uVG9rZW5SZWZyZXNoLmJpbmQoX21lc3NhZ2luZyk7XG4gICAgICB9IFxuICAgICk7XG4gICAgLy8gdGhpcy5nZXRUb2tlbigpO1xuICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoKTsgXG4gIH1cbiAgLy9vbiB3ZWIgZ2V0dGluZyB0aGUgdG9rZW4gbWVhbnMgYXNraW5nIGZvciBwZXJtaXNzaW9uXG4gIHVwZGF0ZVBlcm1pc3Npb24oKSB7XG4gICAgdGhpcy5nZXRUb2tlbigpO1xuICB9XG4gIGdldFRva2VuKCkge1xuICAgIHRoaXMuYW5ndWxhckZpcmVNZXNzYWdpbmcucmVxdWVzdFRva2VuXG4gICAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHRva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb24ubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGdldCBwZXJtaXNzaW9uIHRvIG5vdGlmeS4nLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVjZWl2ZU1lc3NhZ2UoKSB7XG4gICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy5tZXNzYWdlc1xuICAgICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcbiAgICAgICAgLnN1YnNjcmliZSgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1lc3NhZ2UubmV4dChwYXlsb2FkKTtcbiAgICAgICAgfSk7XG4gIH1cbiAgb25Ub2tlblJlZnJlc2goKSB7XG4gICAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLnRva2VuQ2hhbmdlc1xuICAgICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcbiAgICAgICAgLnN1YnNjcmliZSh0b2tlbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodG9rZW4pO1xuICAgICAgICB9KVxuICB9XG5cbn1cbiJdfQ==