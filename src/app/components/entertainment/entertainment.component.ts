import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainmentNews:any[]=[]
  latestArticles:any[]=[]
  constructor(private _NewsService:NewsService, private _Router:Router){}
  ngOnInit(): void {
    this._NewsService.getAllEntertainment().subscribe({
      next:(data)=>{
        this.entertainmentNews=data.articles;
      },
      error:(err)=>{
        console.log(err);
      }
    })
    this._NewsService.getNews().subscribe({
      next:(data)=>{
        this.latestArticles=data.articles;
      },
      error:(err)=>{
        console.log(err);
      }
    })
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
}
