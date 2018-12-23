import { MobileFirebaseMessagingService } from './mobile-firebase-messaging.service';
import { BehaviorSubject } from 'rxjs';
import { PlatformHelperService } from './../helpers/platform-helper.service';
import { Platform } from '@ionic/angular';
import { WebFirebaseMessagingService } from './web-firebase-messaging.service';
export declare class UnifiedFirebaseMessagingService {
    private mobileNotifications;
    private webNotifications;
    private platformHelper;
    private platformService;
    currentMessage: BehaviorSubject<any>;
    token: BehaviorSubject<string>;
    IsActive: boolean;
    permission: BehaviorSubject<any>;
    constructor(mobileNotifications: MobileFirebaseMessagingService, webNotifications: WebFirebaseMessagingService, platformHelper: PlatformHelperService, platformService: Platform);
    init(): void;
    joinGroup(id: string): void;
    leaveGroup(id: string): void;
    updatePermission(): void;
    hasPermission(): Promise<boolean>;
}
