import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-books-dialog',
  templateUrl: './books-dialog.component.html',
  styleUrls: ['./books-dialog.component.scss']
})
export class BooksDialogComponent implements OnInit {
  bookId: number;
  dialogType: string;

  constructor(
    public dialogRef: MatDialogRef<BooksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.bookId = data.bookId;
    this.dialogType = data.dialogType;
  }

  ngOnInit() {}

  onDialogClose = (): void => {
    this.dialogRef.close();
  }
}
