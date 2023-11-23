import { Component,OnInit, AfterViewInit, Renderer2, ElementRef, Output, Input, ViewChildren, QueryList, ViewChild, ContentChildren } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('back') back!:ElementRef
  @ViewChildren('dark') darkElem!:QueryList<ElementRef>
  
  news:any=[]
  firstNews:any
  secondNews:any
  thirdNews:any
  fourthNews:any
  businessNews:any=[]
  healthNews:any[]=[]
  videos:any=[]
  firstVideo:any
  entertainmentNews:any[]=[]
  celebNews:any[]=[]
  darkStat:any
  constructor(private _newsService:NewsService, private renderer:Renderer2, private el: ElementRef, private _Router:Router){
    this._newsService.check.subscribe({
      next:(data)=>{
        this.darkStat=data
      }
    })
    
  }
  cond:any
  darkMode():void{
    this._newsService.darkMode();
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
  this.darkStat=this._newsService.darkStatus;
    if(this.darkStat==true){
      this.darkenMode()   
    }else{
      this.whitenMode()
    }
    
    this._newsService.getNews().subscribe({
      next:(data)=>{
        console.log(data.articles);
        this.news=data.articles;
        this.firstNews=data.articles[0]
        this.secondNews=data.articles[1]
        this.thirdNews=data.articles[2]
        this.fourthNews=data.articles[3]
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    this._newsService.getTop().subscribe({
      next:(data)=>{
        console.log(data.articles);
        this.businessNews=data.articles
      },error:(err)=>{
        console.log(err);
      }
    })
    this._newsService.getHealth().subscribe({
      next:(data)=>{
        this.healthNews=data.articles
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
    this._newsService.getTrendingVideos().subscribe({
      next:(data)=>{
        this.videos=data.value;
        this.firstVideo=data.value[0]
        let x:any=document.querySelector('#video')
        x.innerHTML=this.firstVideo.embedHtml
        console.log(data);
        
        // console.log(this.videos.forEach((x:any)=>{
        //   console.log(x.thumbnailUrl);
          
        // }));
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
    this._newsService.getEntertainment().subscribe({
      next:(data)=>{
        this.entertainmentNews=data.articles;
      },
      error:(err)=>{
        console.log(err);
      }
    })
    this._newsService.getCelebNews().subscribe({
      next:(data)=>{
        this.celebNews=data.articles;
        console.log(data);
        
      },error:(err)=>{
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
    localStorage.setItem('article',JSON.stringify(article))
    this._Router.navigate([`/article`])
  }
  ngAfterViewInit(): void {
    // const video:any=document.querySelector('#video')
    // console.log(video?.src);
  //  this.darkElem.forEach((el:ElementRef)=>{
  //   console.log(el.nativeElement);
  //   if(localStorage.getItem('darkMode')!=null){
  //     let dark:any=localStorage.getItem('darkMode')
  //     this.cond=JSON.parse(dark);
  //     if(dark==true){
  //       el.nativeElement.classList.add('white')
  //       this.back.nativeElement.classList.add('bg-dark')
  //     }else{
  //       el.nativeElement.classList.remove('white')
  //       this.back.nativeElement.classList.remove('bg-dark')
  //     }
  //   }
  //  })
  
  }
  // click(video:any,name:string,desc:string):any{
  //   let x:any=document.querySelector('.mo')
  //   console.log(x)
  //   console.log(video);
  //   const videoOf:any=document.querySelector('#video')
  //   let y:any=document.querySelector('#video')
  //   y.innerHTML=video;
  //   let z:any=document.querySelector('.name')
  //   z.innerHTML=name;
  //   let playingNow:any=document.querySelector('#playing')
  //   playingNow.innerText=name;
  //   let des:any=document.querySelector('.desc')
  //   des.innerHTML=desc;
  // }
}
