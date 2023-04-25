import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseURL = 'http://localhost:8088/';
  constructor(private http: HttpClient) {}

 
  addUserProfile(data: any): Observable<any> {
    return this.http.post(this.baseURL + 'profile', data);
  }
 
}
