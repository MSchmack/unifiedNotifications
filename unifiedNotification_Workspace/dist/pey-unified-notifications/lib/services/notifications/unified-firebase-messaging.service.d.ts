import { MobileFirebaseMessagingService } from './mobile-firebase-messaging.service';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { WebFirebaseMessagingService } from './web-firebase-messaging.service';
export declare class UnifiedFirebaseMessagingService {
    private mobileNotifications;
    private webNotifications;
    private platformService;
    currentMessage: BehaviorSubject<any>;
    token: BehaviorSubject<string>;
    IsActive: boolean;
    isAlive: boolean;
    isNative: boolean;
    permission: BehaviorSubject<any>;
    constructor(mobileNotifications: MobileFirebaseMessagingService, webNotifications: WebFirebaseMessagingService, platformService: Platform);
    init(isNative: boolean): void;
    joinGroup(id: string): void;
    leaveGroup(id: string): void;
    updatePermission(): void;
    hasPermission(): Promise<boolean>;
}
