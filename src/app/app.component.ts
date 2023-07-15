import { Component, OnInit } from '@angular/core';
import { NewsService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-maker';
  data: any;
  // newsapi.org key: 0dfd43cd502742cc92236288a10aa0b1

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getData()
      .then(data => {
        this.data = data;
        console.log("THIS.DATA ->", this.data);
      })
      .catch(error => console.error('Error:', error));
  }
}
