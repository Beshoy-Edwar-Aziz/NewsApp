import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
APIKEY:string='7031d4405b97429f882f44291415ad8f'
headers:any={
  'X-RapidAPI-Key': '62ff15f4d0msh82802d9b74a91eep1e8205jsneaa2008c2571',
  'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com'
}

  constructor(private _httpClient:HttpClient) { 
    }
    getNews():Observable<any>
    {
      return this._httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.APIKEY}`)
    }
      getTop():Observable<any>{
        return this._httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.APIKEY}`)
      }
      getHealth():Observable<any>{
        return this._httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${this.APIKEY}`)
      }
      getTrendingVideos():Observable<any>{
        return this._httpClient.get(`https://bing-video-search1.p.rapidapi.com/videos/search`,{
          headers: this.headers,
          params: {q:'poets of the fall'}
        },
        )
      }
      getEntertainment():Observable<any>{
        return this._httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.APIKEY}`)
      }
      getCelebNews():Observable<any>{
        return this._httpClient.get(`https://newsapi.org/v2/everything?q=celeb&sortBy=publishedAt&apiKey=${this.APIKEY}`)
      }
      getAllEntertainment():Observable<any>{
        return this._httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.APIKEY}`)
      }
      searchNews(searchValue:string):Observable<any>{
        return this._httpClient.get(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${this.APIKEY}`)
      }
    }