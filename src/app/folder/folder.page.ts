import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NewsapiService } from '../services/newsapi.service';
import { ArticlesEntity } from '../interfaces/news-response';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  newsList: ArticlesEntity[] | null | undefined;

  constructor(private activatedRoute: ActivatedRoute, private newsApiService: NewsapiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.folder = this.capitalize(this.folder);
    this.getTopHeadLines();
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getTopHeadLines() {
    this.newsApiService.getTopCountryHeadLines('us', this.folder)
      .pipe(map((res) => res.articles))
      .subscribe((news) => (this.newsList = news))
  }
}