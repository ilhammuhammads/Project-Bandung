import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IfMember } from 'app/shared/interfaces';
import { Observable } from 'rxjs';
import { DB_URL } from '@app/config/example-urls';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MembersService {
  constructor(private http: HttpClient) { }

  getMembers (): Observable<IfMember[]> {
    return this.http
      .get<IfMember[]>(`${DB_URL}/members`);
  }

  deleteMembers (id: number): Observable<IfMember> {
    return this.http.delete<IfMember>(`${DB_URL}/members/${id}`, httpOption);
  }

}
