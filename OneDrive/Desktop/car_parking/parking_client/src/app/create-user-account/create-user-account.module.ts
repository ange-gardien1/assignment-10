import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUserAccountPageRoutingModule } from './create-user-account-routing.module';

import { CreateUserAccountPage } from './create-user-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUserAccountPageRoutingModule
  ],
  declarations: [CreateUserAccountPage]
})
export class CreateUserAccountPageModule {}
