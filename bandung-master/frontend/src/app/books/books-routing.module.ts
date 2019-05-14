import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'books/:id',
    component: BooksDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
