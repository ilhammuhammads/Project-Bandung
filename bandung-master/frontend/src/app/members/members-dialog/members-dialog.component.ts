import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-members-dialog',
  templateUrl: './members-dialog.component.html',
  styleUrls: ['./members-dialog.component.scss']
})
export class MembersDialogComponent implements OnInit {
  memberId: number;
  dialogType: string;

  constructor(private dialogRef: MatDialogRef<MembersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
      this.dialogType = data.dialogType;
      this.memberId = data.memberId;
     }

  ngOnInit() {
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }
}
