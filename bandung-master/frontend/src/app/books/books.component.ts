import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BooksDialogComponent } from '@app/books/books-dialog/books-dialog.component';
import { BooksListComponent } from './books-list/books-list.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  dialogConfig = new MatDialogConfig();
  @ViewChild('bookList') bookList: BooksListComponent;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onDialogAddClick = (): void => {
    this.dialogConfig.data = {
      dialogType: 'add'
    };
    this.dialog
      .open(BooksDialogComponent, this.dialogConfig)
      .afterClosed()
      .subscribe(() => this.bookList.onGetBooks());
  }

  onDialogEditClick = (id: number): void => {
    this.dialogConfig.data = {
      dialogType: 'edit',
      bookId: id
    };
    this.dialog
      .open(BooksDialogComponent, this.dialogConfig)
      .afterClosed()
      .subscribe(() => this.bookList.onGetBooks());
  }

  onRefreshBooks = (): void => {
    this.bookList.onGetBooks();
  }
}
