import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { IfMember } from '@app/shared/interfaces';
import { MembersDialogComponent } from '../members-dialog/members-dialog.component';


@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  dialogConfig = new MatDialogConfig();
  dataMembers = new MatTableDataSource();
  displayedColumns: string[] = [
    'nama',
    'alamat',
    'nohandphone',
    'gender',
    'action'
  ];

  constructor(private memberService: MembersService, private dialog: MatDialog) { }

  ngOnInit() {
    this.onGetMembers();
  }

  onGetMembers() {
    this.memberService.getMembers()
    .subscribe((members: IfMember[]) =>
      this.dataMembers.data = members );
  }

  onDeleteDialogOpen(): void {
      this.dialogConfig.data = {
        dialogType: 'delete'
      };
      this.dialog.open(MembersDialogComponent, this.dialogConfig);
    }
}
