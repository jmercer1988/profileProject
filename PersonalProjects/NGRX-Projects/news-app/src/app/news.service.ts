// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../environment/environment'; // Import your env config
// import { NewsApiResponse } from './models/Article.model';

// @Injectable({ providedIn: 'root' })
// export class NewsService {
//   constructor(private http: HttpClient) {}

//   getNews(query: string, category: string = '', country: string = ''): Observable<NewsApiResponse> {
//     const params = new HttpParams()
//       .set('apiKey', environment.newsApiKey) // Store your key securely
//       .set('q', query)
//       .set('category', category)
//       .set('country', country);

//     return this.http.get<NewsApiResponse>(
//       `https://newsapi.org/v2/everything`,
//       { params } 
//     );
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsApiResponse } from './models/Article.model';
import { NewsArticle } from './models/Article.model';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.newsApiKey; // Ensure your API key is stored in the environment file
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';

  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsArticle[]> {
    return this.http.get<{articles: NewsApiResponse[]}>(`${this.apiUrl}${this.apiKey}`)
      .pipe(
        map(response => response.articles.map(this.transformApiResponseToNewsArticle))
      );
  }

  private transformApiResponseToNewsArticle(response: NewsApiResponse): NewsArticle {
    return {
      sourceName: response.source.name,
      author: response.author,
      title: response.title,
      description: response.description,
      url: response.url,
      imageUrl: response.urlToImage,
      publishedDate: response.publishedDate,
      content: response.content
    };
  }
}

