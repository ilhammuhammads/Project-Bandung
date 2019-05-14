import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '@app/books/books.service';
import { IfBooks } from '../books.interface';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss']
})
export class BooksEditComponent implements OnInit {
  book: IfBooks;
  editForm: FormGroup;

  @Input() bookId: number;
  @Output() closeDialog = new EventEmitter();
  constructor(private fb: FormBuilder, private bookService: BooksService) {}

  ngOnInit() {
    this.onGetBook(this.bookId);

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      judul: ['', Validators.required],
      pengarang: ['', Validators.required],
      penerbit: ['', Validators.required],
      tahun: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(4),
          Validators.maxLength(4)
        ]
      ]
    });
  }

  get ef() {
    return this.editForm.controls;
  }

  onGetBook = (id: number): void => {
    this.bookService.getBook(id).subscribe((book: IfBooks) => {
      this.book = book;
      this.editForm.setValue(book, { onlySelf: true });
    });
  }

  editBook = (formData: FormGroup, id: number): void => {
    if (formData.valid) {
      this.bookService
        .editBook(formData.value, id)
        .subscribe(() => this.onCancel());
    }
  }

  onCancel = (): void => {
    this.closeDialog.emit();
  }
}
