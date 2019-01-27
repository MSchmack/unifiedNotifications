import { OnDestroy } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
export declare class WebFirebaseMessagingService implements OnDestroy {
    private angularFireMessaging;
    permission: BehaviorSubject<boolean>;
    token: BehaviorSubject<string>;
    currentMessage: BehaviorSubject<any>;
    isAlive: boolean;
    isActive: boolean;
    constructor(angularFireMessaging: AngularFireMessaging);
    ngOnDestroy(): void;
    init(): void;
    updatePermission(): void;
    getToken(): boolean;
    receiveMessage(): void;
    onTokenRefresh(): void;
}
