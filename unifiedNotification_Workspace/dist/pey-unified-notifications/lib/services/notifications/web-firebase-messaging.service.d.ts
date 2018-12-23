import { OnDestroy } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
export declare class WebFirebaseMessagingService implements OnDestroy {
    private angularFireMessaging;
    permission: BehaviorSubject<boolean>;
    token: BehaviorSubject<string>;
    currentMessage: BehaviorSubject<any>;
    isAlive: boolean;
    constructor(angularFireMessaging: AngularFireMessaging);
    ngOnDestroy(): void;
    init(): void;
    updatePermission(): void;
    getToken(): void;
    receiveMessage(): void;
    onTokenRefresh(): void;
}
