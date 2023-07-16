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
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;

    this.newsService.getData(formattedDate)
      .then(data => {
        this.data = data.articles;
        console.log("THIS.DATA ->", this.data);
      })
      .catch(error => console.error('Error:', error));
  }
}
