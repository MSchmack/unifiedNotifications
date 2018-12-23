

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
@Injectable({
    providedIn: 'root'
})
export class PlatformHelperService {
    
    constructor(private platformService: Platform) { }

    get isNative(): boolean {
        //if http://local like in prod build & ios or android
        // solution till platform.is('mobile') fixed
        if(
            (document.URL.indexOf( 'http://localhost') !== -1) &&
            (this.platformService.is('ios') || this.platformService.is('android') )
         ) {
            return true;
        } else {
            return false;
        }         
    }
}
