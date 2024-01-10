import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserAccountPage } from './create-user-account.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUserAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUserAccountPageRoutingModule {}
