import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { SharedModule } from '@app/shared/shared.module';
import { AppMaterialModule } from '@app/shared/app-material.module';
import { MembersListComponent } from './members-list/members-list.component';
import { MembersAddComponent } from './members-add/members-add.component';
import { MembersDialogComponent } from './members-dialog/members-dialog.component';
import { MembersDeleteComponent } from './members-delete/members-delete.component';


@NgModule({
  declarations: [MembersComponent,
    MembersListComponent,
    MembersAddComponent,
    MembersDialogComponent,
    MembersDeleteComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    SharedModule,
    AppMaterialModule
  ],
  entryComponents: [
    MembersDialogComponent
  ]
})
export class MembersModule { }
