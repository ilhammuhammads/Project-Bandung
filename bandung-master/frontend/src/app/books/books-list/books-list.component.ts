import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter
} from '@angular/core';
import { BooksService } from '@app/books/books.service';

import { MatTableDataSource, MatSort } from '@angular/material';

import { IfBooks } from '../books.interface';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  libBooks = new MatTableDataSource();
  @Output() editBookDialog = new EventEmitter<number>();
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    'judul',
    'pengarang',
    'penerbit',
    'tahun',
    'actions'
  ];

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.onGetBooks();
    this.libBooks.sort = this.sort;
  }

  booksFilter = (value: string) => {
    this.libBooks.filter = value.trim().toLocaleLowerCase();
  }

  onGetBooks = (): void => {
    this.bookService
      .getBooks()
      .subscribe((books: IfBooks[]) => (this.libBooks.data = books));
  }

  onDeleteBook = (id: number): void => {
    this.bookService.deleteBook(id).subscribe(() => this.onGetBooks());
  }

  onEditDialogOpen = (id: number): void => {
    this.editBookDialog.emit(id);
  }
}
