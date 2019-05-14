import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MembersDialogComponent } from './members-dialog/members-dialog.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  dialogConfig = new MatDialogConfig;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onDialogAddMember(): void {
    this.dialogConfig.data = {
      dialogType: 'add'
    };
    this.dialog.open(MembersDialogComponent, this.dialogConfig);
  }

}
