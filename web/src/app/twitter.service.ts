import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class TwitterService {

  constructor(private http: HttpClient) {}

  twitterSearch(tweet) {
      return this.http
        .get<any>('http://localhost:3000/search/' + tweet)
        .toPromise()
        .then(res => {
          return res.tweets.statuses;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
