import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { IosPushNotificationPermissiongGuard } from 'pey-unified-notifications';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage,
        canActivate: [IosPushNotificationPermissiongGuard]
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
