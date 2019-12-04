import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { NgForm } from '@angular/forms';
import { Twitter } from './twitter.model';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  tweets: Twitter[] = [];

  constructor(private TwitterService: TwitterService ) { }

  ngOnInit() {
  }

  searchTweet(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.TwitterService.twitterSearch(form.value.tweet)
      .then((tweets: Twitter[]) => {
        this.tweets = tweets;
      });
      form.resetForm();
      }
    }
}
