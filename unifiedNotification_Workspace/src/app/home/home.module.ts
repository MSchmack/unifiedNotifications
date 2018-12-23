import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
// import { PeyUnifiedNotificationsModule } from 'pey-unified-notifications'
import { PeyUnifiedNotificationsModule } from 'projects/pey-unified-notifications/src/public_api'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeyUnifiedNotificationsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

