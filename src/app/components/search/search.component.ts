import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private _NewsService:NewsService, private _Router:Router){}
  searchValue:any
  searchResults:any[]=[]
  search():void{
    this._NewsService.searchNews(this.searchValue).subscribe({
      next:(data)=>{
        this.searchResults=data.articles;
        console.log(data);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  close():void{
    this._Router.navigate(['/home'])
  }
  openArticle(title:string,content:string,img:string,date:any,author:string,url:any):any{
    let article:{}={
      title:title,
      content:content,
      img:img,
      author:author,
      date:date,
      url:url
    }
    localStorage.setItem('article',JSON.stringify(article));
    this._Router.navigate([`/article`]);
    window.scrollTo(0,0);
  }
  ngOnInit(): void {
    this._NewsService.searchNews(this.searchValue).subscribe({
      next:(data)=>{
        this.searchResults=data.articles;
        console.log(data);
      },
      error:(err)=>{
        console.log(err);
      }
    }) 
  }
}
