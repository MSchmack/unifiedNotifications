import { OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Firebase } from '@ionic-native/firebase/ngx';
export declare class MobileFirebaseMessagingService implements OnDestroy {
    private firebase;
    permission: BehaviorSubject<boolean>;
    token: BehaviorSubject<string>;
    currentMessage: BehaviorSubject<any>;
    isAlive: boolean;
    constructor(firebase: Firebase);
    ngOnDestroy(): void;
    init(): void;
    getToken(): void;
    initNotifications(): void;
    joinGroup(id: string): void;
    leaveGroup(id: string): void;
    updatePermission(): void;
    hasPermission(): Promise<boolean>;
}
