import { Platform } from '@ionic/angular';
export declare class PlatformHelperService {
    private platformService;
    constructor(platformService: Platform);
    readonly isNative: boolean;
}
