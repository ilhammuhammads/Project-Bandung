import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MembersDialogComponent } from '../members-dialog/members-dialog.component';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-members-delete',
  templateUrl: './members-delete.component.html',
  styleUrls: ['./members-delete.component.scss']
})
export class MembersDeleteComponent implements OnInit {
  memberId: number;
  dialogType: string;

  constructor(private memberService: MembersService,
    public dialogRef: MatDialogRef<MembersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.memberId = data.memberId;
    this.dialogType = data.dialogType;
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onDeleteMembers(id: number) {
    this.memberService.deleteMembers(id)
    .subscribe(() => this.dialogRef.close());
  }

}
