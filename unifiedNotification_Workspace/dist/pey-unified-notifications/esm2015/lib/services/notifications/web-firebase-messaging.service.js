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
        this.angularFireMessaging.messaging.pipe(takeWhile(() => this.isAlive)).subscribe((_messaging) => {
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
        return true;
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
    /** @type {?} */
    WebFirebaseMessagingService.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    WebFirebaseMessagingService.prototype.angularFireMessaging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7O0FBS2hELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFTdEMsWUFDVSxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVJsRCxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDaEQsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsWUFBTyxHQUFFLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFJZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDQyxXQUFXO1FBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0gsSUFBSTtRQUVGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQy9FLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDYixVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdELFVBQVUsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUNGLENBQUM7UUFDRixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVk7YUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkMsU0FBUyxDQUNOLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUNKLENBQUM7UUFDSixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7O0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRO2FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDOzs7O0lBQ0QsY0FBYztRQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZO2FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQzs7O1lBOURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLG9CQUFvQjs7Ozs7SUFTekIsaURBQWdEOztJQUNoRCw0Q0FBMEM7O0lBQzFDLHFEQUEyQzs7SUFFM0MsOENBQWM7O0lBQ2QsK0NBQWlCOzs7OztJQUdqQiwyREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTWVzc2FnaW5nIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveXtcblxuICAgIHBlcm1pc3Npb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xuICAgIHRva2VuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICAgIGN1cnJlbnRNZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICAgIGlzQWxpdmU9IHRydWU7XG4gICAgaXNBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuZ3VsYXJGaXJlTWVzc2FnaW5nOiBBbmd1bGFyRmlyZU1lc3NhZ2luZykge1xuICAgICAgY29uc29sZS5sb2coJ3dlYicpO1xuICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7IGNvbnNvbGUubG9nKCd3ZWJkZWFkJyk7XG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICBpbml0KCkge1xuXG4gICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy5tZXNzYWdpbmcucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSkuc3Vic2NyaWJlKFxuICAgICAgKF9tZXNzYWdpbmcpID0+IHtcbiAgICAgICAgX21lc3NhZ2luZy5vbk1lc3NhZ2UgPSBfbWVzc2FnaW5nLm9uTWVzc2FnZS5iaW5kKF9tZXNzYWdpbmcpO1xuICAgICAgICBfbWVzc2FnaW5nLm9uVG9rZW5SZWZyZXNoID0gX21lc3NhZ2luZy5vblRva2VuUmVmcmVzaC5iaW5kKF9tZXNzYWdpbmcpO1xuICAgICAgfSBcbiAgICApO1xuICAgIC8vIHRoaXMuZ2V0VG9rZW4oKTtcbiAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKCk7IFxuICB9XG4gIC8vb24gd2ViIGdldHRpbmcgdGhlIHRva2VuIG1lYW5zIGFza2luZyBmb3IgcGVybWlzc2lvblxuICB1cGRhdGVQZXJtaXNzaW9uKCkge1xuICAgIHRoaXMuZ2V0VG9rZW4oKTtcbiAgfVxuICBnZXRUb2tlbigpIHtcbiAgICB0aGlzLmFuZ3VsYXJGaXJlTWVzc2FnaW5nLnJlcXVlc3RUb2tlblxuICAgICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh0b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBnZXQgcGVybWlzc2lvbiB0byBub3RpZnkuJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlY2VpdmVNZXNzYWdlKCkge1xuICAgIHRoaXMuYW5ndWxhckZpcmVNZXNzYWdpbmcubWVzc2FnZXNcbiAgICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlLm5leHQocGF5bG9hZCk7XG4gICAgICAgIH0pO1xuICB9XG4gIG9uVG9rZW5SZWZyZXNoKCkge1xuICAgICAgdGhpcy5hbmd1bGFyRmlyZU1lc3NhZ2luZy50b2tlbkNoYW5nZXNcbiAgICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSkpXG4gICAgICAgIC5zdWJzY3JpYmUodG9rZW4gPT4ge1xuICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHRva2VuKTtcbiAgICAgICAgfSlcbiAgfVxuXG59XG4iXX0=