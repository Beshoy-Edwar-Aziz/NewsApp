import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit ,AfterViewInit {
  financeNews:any[]=[];
  entertainmentNews:any[]=[];
  darkStatus:boolean=false;
  @ViewChildren('dark') darkElem!:QueryList<any>; 
  
  constructor(private _Router:Router, private _NewsService:NewsService){}
  navigate():void{
    this._Router.navigate(['/search'])
  }
  darkMode():any{
    this._NewsService.darkMode()
  }
  showFinanceNav():void{
    let showFinanceNav:any=document.querySelector('.showNav')
    showFinanceNav.classList.replace('d-none','d-block')
  }
  hideFinanceNav():void{
    let showFinanceNav:any=document.querySelector('.showNav')
    showFinanceNav.classList.replace('d-block','d-none')
  }
  showEntertainmentNav():void{
    let showEntertianmentNav:any=document.querySelector('.showEnterNav')
    showEntertianmentNav.classList.replace('d-none','d-block')
  }
  hideEntertainmentNav():void{
    let showEntertainmentNav:any=document.querySelector('.showEnterNav')
    showEntertainmentNav.classList.replace('d-block','d-none')
  }
  ngOnInit(): void {
      if(localStorage.getItem('darkMode')!=null){
        let x:any=localStorage.getItem('darkMode')
        this.darkStatus=JSON.parse(x)
      }
      console.log(this.darkStatus);
      
    this._NewsService.getFinanceNews().subscribe({
      next:(data)=>{
        this.financeNews=data.articles
      },
      error:(err)=>{
        console.log(err); 
      }
    })
    this._NewsService.getEntertainment().subscribe({
      next:(data)=>{
        this.entertainmentNews=data.articles
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  ngAfterViewInit(): void {
    
  }
  }

