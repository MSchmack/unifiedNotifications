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
    /**
     * @type {?}
     * @private
     */
    WebFirebaseMessagingService.prototype.angularFireMessaging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFRdEMsWUFDVSxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVBsRCxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDaEQsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsWUFBTyxHQUFFLElBQUksQ0FBQztJQUtoQixDQUFDOzs7O0lBQ0MsV0FBVztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQzNDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDYixVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdELFVBQVUsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUNGLENBQUM7UUFDRixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVk7YUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkMsU0FBUyxDQUNOLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUNKLENBQUM7SUFDUixDQUFDOzs7O0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRO2FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDOzs7O0lBQ0QsY0FBYztRQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZO2FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQzs7O1lBMURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLG9CQUFvQjs7Ozs7SUFTekIsaURBQWdEOztJQUNoRCw0Q0FBMEM7O0lBQzFDLHFEQUEyQzs7SUFFM0MsOENBQWM7Ozs7O0lBR2QsMkRBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZU1lc3NhZ2luZyB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvbWVzc2FnaW5nJztcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXZWJGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3l7XG5cbiAgICBwZXJtaXNzaW9uID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTtcbiAgICB0b2tlbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcbiAgICBjdXJyZW50TWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgICBpc0FsaXZlPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5ndWxhckZpcmVNZXNzYWdpbmc6IEFuZ3VsYXJGaXJlTWVzc2FnaW5nKSB7XG5cbiAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbiAgICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy5tZXNzYWdpbmcuc3Vic2NyaWJlKFxuICAgICAgKF9tZXNzYWdpbmcpID0+IHtcbiAgICAgICAgX21lc3NhZ2luZy5vbk1lc3NhZ2UgPSBfbWVzc2FnaW5nLm9uTWVzc2FnZS5iaW5kKF9tZXNzYWdpbmcpO1xuICAgICAgICBfbWVzc2FnaW5nLm9uVG9rZW5SZWZyZXNoID0gX21lc3NhZ2luZy5vblRva2VuUmVmcmVzaC5iaW5kKF9tZXNzYWdpbmcpO1xuICAgICAgfVxuICAgICk7XG4gICAgLy8gdGhpcy5nZXRUb2tlbigpO1xuICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoKTsgXG4gIH1cbiAgLy9vbiB3ZWIgZ2V0dGluZyB0aGUgdG9rZW4gbWVhbnMgYXNraW5nIGZvciBwZXJtaXNzaW9uXG4gIHVwZGF0ZVBlcm1pc3Npb24oKSB7XG4gICAgICB0aGlzLmdldFRva2VuKCk7XG4gIH1cbiAgZ2V0VG9rZW4oKSB7XG4gICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy5yZXF1ZXN0VG9rZW5cbiAgICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSkpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbi5uZXh0KHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZ2V0IHBlcm1pc3Npb24gdG8gbm90aWZ5LicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gIH1cbiAgcmVjZWl2ZU1lc3NhZ2UoKSB7XG4gICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy5tZXNzYWdlc1xuICAgICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcbiAgICAgICAgLnN1YnNjcmliZSgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1lc3NhZ2UubmV4dChwYXlsb2FkKTtcbiAgICAgICAgfSk7XG4gIH1cbiAgb25Ub2tlblJlZnJlc2goKSB7XG4gICAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLnRva2VuQ2hhbmdlc1xuICAgICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcbiAgICAgICAgLnN1YnNjcmliZSh0b2tlbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodG9rZW4pO1xuICAgICAgICB9KVxuICB9XG5cbn1cbiJdfQ==