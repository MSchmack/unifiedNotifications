

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
        // return true;
        // document.URL.startsWith('http://localhost:')
        if(
            // (document.URL.indexOf( 'http://localhost') !== -1) &&
            // (document.URL.indexOf('localhost:8080') > -1 ) 
            // document.URL.startsWith('http://localhost:8')
            document.URL.startsWith('http://')
            && (!(document.URL.startsWith('http://localhost:81')))
            // || (environment.production == false && (
            //     (window.hasOwnProperty('cordova')) &&
            //     (this.platformService.is('ios') || this.platformService.is('android'))          
            // ))
            // (window.hasOwnProperty('cordova')) &&
            // (this.platformService.is('ios') || this.platformService.is('android') )
         ) {
            return true;
        } else {
            return false;
        }         
    }
}
