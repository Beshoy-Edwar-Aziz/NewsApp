import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(private _newsService:NewsService,private _Router:Router){}
  article:any
  news:any[]=[]
  update:BehaviorSubject<any>=new BehaviorSubject(null)
  loading:boolean=false;
  loadingArticle:boolean=false;
  ngOnInit(): void {
    if(localStorage.getItem('article')!=null){
      let articleData:any=localStorage.getItem('article');
      this.article=JSON.parse(articleData);
    }
    this.loadingArticle=true;
    this._newsService.getNews().subscribe({
      next:(data)=>{
        this.news=data.articles;
        this.loadingArticle=false;
      },error:(err)=>{
        console.log(err);
        this.loadingArticle=false;
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
    localStorage.setItem('article',JSON.stringify(article))
    this._Router.navigate(['/article'])
    let x:any=localStorage.getItem('article')
    this.loading=true;
    this.update.next(JSON.parse(x))
    this.update.subscribe({
      next:(data)=>{
        this.article=data
        window.scrollTo(0,0)
        this.loading=false;
      }
    })
    
  }

}
