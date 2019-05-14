import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BooksService } from '@app/books/books.service';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.scss']
})
export class BooksAddComponent implements OnInit {
  addForm: FormGroup;
  @Output() closeDialog = new EventEmitter();
  constructor(private fb: FormBuilder, private booksService: BooksService) {}

  ngOnInit() {
    this.addForm = this.fb.group({
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

  get af() {
    return this.addForm.controls;
  }

  addBook = (formData: FormGroup): void => {
    if (formData.valid) {
      this.booksService
        .addBook(formData.value)
        .subscribe(() => this.onCancel());
    }
  }

  onCancel = (): void => {
    this.closeDialog.emit();
  }
}
