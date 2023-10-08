import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsResponse } from '../interfaces/news-response';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  topHeadLinesPath = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTopCountryHeadLines(country: string, category: string): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.topHeadLinesPath + `?country=${country}&category=${category}&pageSize=10&apiKey=${environment.apiKey}`);
  }
}
