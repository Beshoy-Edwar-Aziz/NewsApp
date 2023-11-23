import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
APIKEY:string='7031d4405b97429f882f44291415ad8f'
headers:any={
  'X-RapidAPI-Key': '62ff15f4d0msh82802d9b74a91eep1e8205jsneaa2008c2571',
  'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com'
}
check:BehaviorSubject<any>=new BehaviorSubject(null)
darkStatus:any;
  constructor(private _httpClient:HttpClient) { 
    if(localStorage.getItem('darkMode')!=null){
      let x:any=localStorage.getItem('darkMode');
      let y:any=JSON.parse(x);
      this.darkStatus=y;
    }
  }
  darkMode():any{
    if(this.darkStatus==false){
   let x:any = document.querySelectorAll('.dark');
   let y:any = document.querySelector('#backGround-color')
   y.classList.add('bg-dark')
   x.forEach((x:any) => {
      x.classList.add('white')
   });
  this.darkStatus=true;
  
  }else if(this.darkStatus==true){
    let x:any = document.querySelectorAll('.dark');
   let y:any = document.querySelector('#backGround-color')
   y.classList.remove('bg-dark')
   x.forEach((x:any) => {
      x.classList.remove('white')
   });
   this.darkStatus=false;
  }
  console.log(this.darkStatus);
  localStorage.setItem('darkMode',JSON.stringify(this.darkStatus))
  this.check.next(this.darkStatus)
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
          params: {q:'poets'}
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
      getFinanceNews():Observable<any>{
        return this._httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.APIKEY}`)
      }
      
    }