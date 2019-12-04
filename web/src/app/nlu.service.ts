import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NluService {

  constructor(private http: HttpClient) { }

  nluFile(bufferFile) {
    return this.http
      .get<any>('http://localhost:5000/nlu/' + bufferFile)
      .toPromise()
      .then(res => {
         return res;
         
      })
      .catch(error => {
        console.log(error);
      });
  }
}
