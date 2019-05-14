import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { BooksService } from '@app/books/books.service';

import { IfBooks } from '../books.interface';
import { BooksDialogComponent } from '../books-dialog/books-dialog.component';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {
  dialogConfig = new MatDialogConfig();
  book: IfBooks;
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.onGetBook(id);
  }

  onGetBook = (id: number): void => {
    this.bookService.getBook(id).subscribe((book: IfBooks) => {
      this.book = book;
    });
  }

  onDialogEditClick = (id: number): void => {
    this.dialogConfig.data = {
      dialogType: 'edit',
      bookId: id
    };

    this.dialog
      .open(BooksDialogComponent, this.dialogConfig)
      .afterClosed()
      .subscribe(() => this.onGetBook(id));
  }
}
