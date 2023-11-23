import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  financeNews:any[]=[]
  latestArticles:any
  darkStat:any;
  constructor(private _NewsService:NewsService, private _Router:Router){
    this._NewsService.check.subscribe({
      next:(data)=>{
        this.darkStat=data
      }
    })
  }
  darkenMode():void{
    let x:any = document.querySelectorAll('.dark');
   let y:any = document.querySelector('#backGround-color')
   y.classList.add('bg-dark')
   x.forEach((x:any) => {
      x.classList.add('white')
   });
  }
  whitenMode():void{
    let x:any = document.querySelectorAll('.dark');
   let y:any = document.querySelector('#backGround-color')
   y.classList.remove('bg-dark')
   x.forEach((x:any) => {
      x.classList.remove('white')
   });
  }
  ngOnInit(): void {
    this.darkStat=this._NewsService.darkStatus;
    if(this.darkStat==true){
      this.darkenMode()   
    }else{
      this.whitenMode()
    }
    this._NewsService.getFinanceNews().subscribe({
      next:(data)=>{
        this.financeNews=data.articles
      },error:(err)=>{
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
