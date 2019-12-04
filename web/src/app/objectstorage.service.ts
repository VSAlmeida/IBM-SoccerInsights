import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectstorageService {

  constructor(private http: HttpClient) { }

  cosFile(file) {
    return this.http
      .post< any >('http://localhost:4000/file', file)
      .toPromise()
      .then(res => {
         return res.content;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
