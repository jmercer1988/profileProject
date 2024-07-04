export interface NewsArticle {
  sourceName: string;
  author?: string;
  title: string;
  description?: string;
  url: string;
  imageUrl?: string;
  publishedDate: string;
  content?: string;
}
  
export interface NewsApiResponse {
  source: any;
  urlToImage: string | undefined;
  sourceName: string;
  author?: string;
  title: string;
  description?: string;
  url: string;
  imageUrl?: string;
  publishedDate: string;
  content?: string;
}