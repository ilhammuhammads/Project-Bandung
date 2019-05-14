import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';

import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatSortModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { BooksDialogComponent } from './books-dialog/books-dialog.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    BooksDetailComponent,
    BooksDialogComponent,
    BooksAddComponent,
    BooksEditComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    FlexLayoutModule
  ],
  exports: [BooksComponent],
  entryComponents: [BooksDialogComponent]
})
export class BooksModule {}
