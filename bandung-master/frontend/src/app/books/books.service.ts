import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IfBooks } from './books.interface';
import { BASE_URL } from '@app/config/urls';

const headersConfig = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks = (): Observable<IfBooks[]> => {
    return this.http
      .get<IfBooks[]>(`${BASE_URL}/books`, headersConfig)
      .pipe(catchError(this.handleError));
  }

  getBook = (id: number): Observable<IfBooks> => {
    return this.http
      .get<IfBooks>(`${BASE_URL}/books/${id}`)
      .pipe(catchError(this.handleError));
  }

  addBook = (book: any): Observable<IfBooks> => {
    return this.http
      .post<IfBooks>(`${BASE_URL}/books`, book, headersConfig)
      .pipe(catchError(this.handleError));
  }

  editBook = (book: IfBooks, id: number): Observable<IfBooks> => {
    return this.http.put<IfBooks>(
      `${BASE_URL}/books/${id}`,
      book,
      headersConfig
    );
  }

  deleteBook = (id: number): Observable<IfBooks> => {
    return this.http
      .delete<IfBooks>(`${BASE_URL}/books/${id}`, headersConfig)
      .pipe(catchError(this.handleError));
  }

  private handleError = (error: any) => {
    console.error('server error: ', error);

    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }

    return Observable.throw(error || 'Node.js server error');
  }
}
