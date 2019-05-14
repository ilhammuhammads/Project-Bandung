import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IFexample } from '../shared/interfaces';
import { DB_URL } from '../config/example-urls';

const headersConfig = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http: HttpClient) {}

  getExample = (): Observable<IFexample[]> => {
    return this.http
      .get<IFexample[]>(`${DB_URL}/example`, headersConfig)
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
